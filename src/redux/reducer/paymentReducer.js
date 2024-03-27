import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        transactionHash: null,
        isFetching: false,
        error: false
    },
    reducers: {
        makePaymentStart: (state) => {
            state.isFetching = true
        },
        makePaymentSuccess: (state, action) => {
            state.isFetching = false
            state.transactionHash = action.payload
        },
        makePaymentFailed: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { makePaymentStart, makePaymentSuccess, makePaymentFailed } = paymentSlice.actions

export default paymentSlice.reducer