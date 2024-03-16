import axios from "axios";
import { loginFailed, loginStart, loginSuccess, signupFailed, signupStart, signupSuccess } from "./reducer/authReducer";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("https://on-shop-blockchain.onrender.com/login", user)
        dispatch(loginSuccess(res.data))
        navigate("/account/transactions")
    } catch (err) {
        dispatch(loginFailed())
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