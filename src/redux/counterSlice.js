import { createSlice } from "@reduxjs/toolkit";


export const counterSlice =createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
   //actions are created inside this reducers key
    reducers:{
       //logic to update state

       //function to increment number
       increment:(state,action)=>{
        //if it is argument fun then it can only be accesed by action and value payload

        state.value +=action.payload
       } ,
       //function to decrement number
       decrement:(state,action)=>{
         //if it is argument fun then it can only be accesed by action and value payload

        state.value -=action.payload

       },
       //function to reset
       reset:(state)=>{
        state.value=0
       }
        
    }
})
//action is required by component  inorder to update state
export const{increment,decrement,reset}=counterSlice.actions
//reducer is required to change the state value
export default counterSlice.reducer