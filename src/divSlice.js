import { createSlice } from "@reduxjs/toolkit";

export const divSlice=createSlice({
    name:'counter',
    initialState:{
        value4:0,
    },
    reducers:{
        div:(state,action) =>{
            state.value4=Number(action.payload.divisor)/Number(action.payload.quotient);
        },
    },
})

export const {div} = divSlice.actions
export default divSlice.reducer