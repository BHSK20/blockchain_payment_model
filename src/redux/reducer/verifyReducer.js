import { createSlice } from "@reduxjs/toolkit";

const verifySlice = createSlice({
    name: "verify",
    initialState: {
        publicKey: null,
        isFetching: false,
        error: false
    },
    reducers: {
        verifyEmailStart: (state) => {
            state.isFetching = true
        },
        verifyEmailSuccess: (state, action) => {
            state.isFetching = false
            state.publicKey = action.payload
        },
        verifyEmailFailed: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { verifyEmailStart, verifyEmailSuccess, verifyEmailFailed } = verifySlice.actions

export default verifySlice.reducer