import { configureStore } from "@reduxjs/toolkit";
import dishes from '../components/dishesList/dishesSlice';

const store = configureStore({
    reducer: dishes,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;