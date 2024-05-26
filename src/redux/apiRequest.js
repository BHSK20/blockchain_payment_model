import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutSuccess, signupFailed, signupStart, signupSuccess } from "./reducer/authReducer";
import Swal from "sweetalert2";
import { registerMerchantFailed, registerMerchantStart, registerMerchantSuccess } from "./reducer/merchantReducer";
import { transferCurrencyFailed, transferCurrencyStart, transferCurrencySuccess } from "./reducer/transferReducer";
import { makePaymentFailed, makePaymentStart, makePaymentSuccess } from "./reducer/paymentReducer"
import { depositCurrencyFailed, depositCurrencyStart, depositCurrencySuccess } from "./reducer/depositReducer";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const loginResponse = await axios.post("https://on-shop-blockchain.onrender.com/login", user)
        console.log("loginResponse", loginResponse.data.data)
        console.log("loginResponseToken", loginResponse.data.data.token)
        if (loginResponse && loginResponse.data.data) {
            localStorage.setItem("token", JSON.stringify(loginResponse.data.data))
        }
        const userInformationResponse = await axios.get("https://on-shop-blockchain.onrender.com/user/payload", { headers: { Authorization: `Bearer ${loginResponse.data.data.token}` } })
        console.log("userInformationResponse", userInformationResponse.data.data)
        if (userInformationResponse && userInformationResponse.data.data) {
            localStorage.setItem("user", JSON.stringify(userInformationResponse.data.data))
        }
        dispatch(loginSuccess(userInformationResponse.data.data))
        navigate("/account/transactions")
    } catch (err) {
        dispatch(loginFailed())
        Swal.fire({
            title: "Login failed",
            text: "Please recheck the email and password and try again.",
            icon: "error",
            confirmButtonColor: "#5a67d8",
        });
    }
}

export const signupUser = async (user, dispatch, navigate) => {
    dispatch(signupStart())
    try {
        await axios.post("https://on-shop-blockchain.onrender.com/register", user)
        dispatch(signupSuccess())
        localStorage.setItem("signupSuccess", "true")
        navigate("/login")
    } catch (err) {
        dispatch(signupFailed())
    }
}

export const logoutUser = async (dispatch, navigate) => {
    try {
        dispatch(logoutSuccess())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/")
    } catch (err) {
        console.log("logout error", err)
    }
}

export const registerMerchant = async (merchant, dispatch) => {
    dispatch(registerMerchantStart())
    try {
        const registerResponse = await axios.post("https://on-shop-blockchain.onrender.com/merchant_register", merchant, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}` } })
        console.log("registerResponse", registerResponse.data.data)
        dispatch(registerMerchantSuccess(registerResponse.data.data))
        // ----------------------------------------------------
        // Update the the role of "user" object in localStorage
        const userString = localStorage.getItem("user");
        let user = {};
        if (userString) {
            user = JSON.parse(userString);
        }
        user.role = "MERCHANT";
        localStorage.setItem("user", JSON.stringify(user));
        // ----------------------------------------------------
        Swal.fire({
            title: "Registration successful",
            html: `<p><b class="text-success">API Key: </b></p><p>${registerResponse.data.data.api_key}</p><br><hr><br><p><b class="text-success">Partner Code: </b></p><p>${registerResponse.data.data.partner_code}</p>`,
            icon: "success",
            confirmButtonColor: "#5a67d8",
        });
    } catch (err) {
        dispatch(registerMerchantFailed())
        Swal.fire({
            title: "Registration failed",
            text: "Customer is already a merchant.",
            icon: "error",
            confirmButtonColor: "#5a67d8",
        });
    }
}

export const transferCurrency = async (data, dispatch) => {
    dispatch(transferCurrencyStart())
    try {
        const transferResponse = await axios.post("https://on-shop-blockchain.onrender.com/transfer", data, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}` } })
        console.log("transferResponse", transferResponse.data.data)
        dispatch(transferCurrencySuccess(transferResponse.data.data))
        // ----------------------------------------------------
        // localStorage.setItem("token", transferResponse.data.data[1])
        // const userInformationResponse = await axios.get("https://on-shop-blockchain.onrender.com/user/payload", { headers: { Authorization: `Bearer ${transferResponse.data.data[1]}` } })
        // console.log("userInformationResponse", userInformationResponse.data.data)
        // if (userInformationResponse && userInformationResponse.data.data) {
        //     localStorage.setItem("user", JSON.stringify(userInformationResponse.data.data))
        // }
        // ----------------------------------------------------
        Swal.fire({
            title: "Transfer successful",
            html: `<p>You have successfully transferred <b class="text-primary">${data.amount} ${data.currency.toUpperCase()}</b> to <b class="text-primary">${data.email}</b>.</p>
            <br><span>Transaction Hash: <a href="https://sepolia.etherscan.io/tx/${transferResponse.data.data}" target="_blank" rel="noreferrer">${transferResponse.data.data}</a></span>`,
            icon: "success",
            confirmButtonColor: "#5a67d8",
        });
    }
    catch (err) {
        dispatch(transferCurrencyFailed())
        Swal.fire({
            title: "Transfer failed",
            text: "Something went wrong while sending your transfer. Please try again.",
            icon: "error",
            confirmButtonColor: "#5a67d8",
        });
    }
}

export const makePayment = async (orderid, dispatch) => {
    dispatch(makePaymentStart())
    try {
        const paymentResponse = await axios.post(`https://on-shop-blockchain.onrender.com/transfer/${orderid}`, {}, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}` } })
        console.log("paymentResponse", paymentResponse.data.data)
        dispatch(makePaymentSuccess(paymentResponse.data.data))
        Swal.fire({
            title: "Make payment successful",
            html: `<span>Transaction Hash: <a href="https://sepolia.etherscan.io/tx/${paymentResponse.data.data}" target="_blank" rel="noreferrer">${paymentResponse.data.data}</a></span>`,
            icon: "success",
            confirmButtonColor: "#5a67d8",
        });
    }
    catch (err) {
        dispatch(makePaymentFailed())
        Swal.fire({
            title: "Make payment failed",
            icon: "error",
            confirmButtonColor: "#5a67d8",
        });
    }
}

export const depositCurrency = async (data, dispatch) => {
    dispatch(depositCurrencyStart())
    try {
        const depositResponse = await axios.post("https://on-shop-blockchain.onrender.com/deposit", data, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}` } })
        console.log("depositResponse", depositResponse.data.data)
        dispatch(depositCurrencySuccess(depositResponse.data.data))
        Swal.fire({
            title: "Deposit successful",
            html: `<p>You have successfully deposited <b class="text-primary">${data.amount} ${data.currency.toUpperCase()}</b>.</p><br><span>Transaction Hash: <a href="https://sepolia.etherscan.io/tx/${depositResponse.data.data}" target="_blank" rel="noreferrer">${depositResponse.data.data}</a></span>`,
            icon: "success",
            confirmButtonColor: "#5a67d8",
        });
    }
    catch (err) {
        dispatch(depositCurrencyFailed())
        Swal.fire({
            title: "Deposit failed",
            text: "Please try again. If you are still unable to make a deposit, please contact our customer support.",
            icon: "error",
            confirmButtonColor: "#5a67d8",
        });
    }
}