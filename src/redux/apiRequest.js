import axios from "axios";
import { loginFailed, loginStart, loginSuccess, signupFailed, signupStart, signupSuccess } from "./reducer/authReducer";
import Swal from "sweetalert2";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const loginResponse = await axios.post("https://on-shop-blockchain.onrender.com/login", user)
        console.log("loginResponse", loginResponse.data)
        if (loginResponse && loginResponse.data) {
            localStorage.setItem("token", JSON.stringify(loginResponse.data))
        }
        dispatch(loginSuccess(loginResponse.data))
        // const userInformationResponse = await axios.post("https://on-shop-blockchain.onrender.com/user/payload", {}, { headers: { token: `Bearer ${loginResponse.data.token}` } })
        // console.log("userInformationResponse", userInformationResponse.data)
        // dispatch(loginSuccess(userInformationResponse.data))
        // navigate("/account/transactions")
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