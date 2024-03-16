import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        signup: {
            isFetching: false,
            error: false,
            success: false,
            alertShown: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFailed: (state) => {
            state.login.isFetching = false
            state.login.error = true
        },
        signupStart: (state) => {
            state.signup.isFetching = true
        },
        signupSuccess: (state) => {
            state.signup.isFetching = false
            state.signup.error = false
            state.signup.success = true
        },
        signupFailed: (state) => {
            state.signup.isFetching = false
            state.signup.error = true
            state.signup.success = false
        },
    }
})

export const { loginStart, loginSuccess, loginFailed, signupStart, signupSuccess, signupFailed } = authSlice.actions

export default authSlice.reducer