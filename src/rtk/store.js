import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from './slices/searchSlice'
import NavReducer from './slices/navbarSlice'
export const store = configureStore({
    reducer: {
        nav: NavReducer,
        search: SearchReducer
    }
})