import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser(state, action) {
            return { ...state, ...action.payload }
        },
        logoutUser(state, action) {
            return action.payload
        }
    }
})