import { createSlice } from "@reduxjs/toolkit";

const transferSlice = createSlice({
    name: "transfer",
    initialState: {
        transactionHash: null,
        isFetching: false,
        error: false
    },
    reducers: {
        transferCurrencyStart: (state) => {
            state.isFetching = true
        },
        transferCurrencySuccess: (state, action) => {
            state.isFetching = false
            state.transactionHash = action.payload
        },
        transferCurrencyFailed: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { transferCurrencyStart, transferCurrencySuccess, transferCurrencyFailed } = transferSlice.actions

export default transferSlice.reducer