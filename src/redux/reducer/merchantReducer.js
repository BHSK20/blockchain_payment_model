import { createSlice } from "@reduxjs/toolkit";

const merchantSlice = createSlice({
    name: "merchant",
    initialState: {
        merchantKeys: null,
        isFetching: false,
        error: false
    },
    reducers: {
        registerMerchantStart: (state) => {
            state.isFetching = true
        },
        registerMerchantSuccess: (state, action) => {
            state.isFetching = false
            state.merchantKeys = action.payload
        },
        registerMerchantFailed: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { registerMerchantStart, registerMerchantSuccess, registerMerchantFailed } = merchantSlice.actions

export default merchantSlice.reducer