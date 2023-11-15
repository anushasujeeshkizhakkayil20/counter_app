import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
//reducer can only update value and state are stored
//reducer key is predefinde(object which can hold more than reducer)
    reducer:{
        //reducer is coming from since we are export as export default
         counter:counterSlice
    }
})