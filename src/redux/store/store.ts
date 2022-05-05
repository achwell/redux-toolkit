import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../slices/counterSlices"
import postReducer from "../slices/postSlices"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer
    }
})
export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>