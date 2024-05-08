import { createSlice } from "@reduxjs/toolkit";

const depositSlice = createSlice({
    name: "deposit",
    initialState: {
        transactionHash: null,
        isFetching: false,
        error: false
    },
    reducers: {
        depositCurrencyStart: (state) => {
            state.isFetching = true
        },
        depositCurrencySuccess: (state, action) => {
            state.isFetching = false
            state.transactionHash = action.payload
        },
        depositCurrencyFailed: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { depositCurrencyStart, depositCurrencySuccess, depositCurrencyFailed } = depositSlice.actions

export default depositSlice.reducer