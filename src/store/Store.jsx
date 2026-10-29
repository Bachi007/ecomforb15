import { configureStore } from "@reduxjs/toolkit";
import productS from './ProductSlice'
import cartS from './CartSlice';
export const store=configureStore({
    reducer:{
        product:productS,
        cart:cartS
    }
})