import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutSuccess, signupFailed, signupStart, signupSuccess } from "./reducer/authReducer";
import Swal from "sweetalert2";

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