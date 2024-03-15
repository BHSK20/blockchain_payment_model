import axios from "axios"
import { takeEvery, all, call } from "redux-saga/effects"

function* loginUser(action) {
    // -------------------- FIX LATER --------------------
    // try {
    //     console.log("login data", action.payload)
    //     const response = yield call(axios.post, "https://on-shop-blockchain.onrender.com/login", action.payload)
    //     console.log("response", response)
    // }
    // catch (error) {
    //     console.log("error", error)
    // }
    // ---------------------------------------------------

}

function* signupUser(action) {
    // -------------------- FIX LATER --------------------
    // try {
    //     console.log("signup data", action.payload)
    //     const response = yield call(axios.post, "https://on-shop-blockchain.onrender.com/register", action.payload)
    //     console.log("response", response)
    // }
    // catch (error) {
    //     console.log("error", error)
    // }
    // ---------------------------------------------------
}

export default function* userSaga() {
    yield all([
        takeEvery("saga/loginUser", loginUser),
        takeEvery("saga/signupUser", signupUser)
    ])
}