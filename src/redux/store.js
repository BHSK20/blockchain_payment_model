import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { userSlice } from "./reducer/userReducer";
import authReducer from "./reducer/authReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
export const store = configureStore({
    reducer: {
        // user: userSlice.reducer
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(rootSaga)