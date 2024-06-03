import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        mul: (state, action) => {
            state.value = action.payload.multiplier * action.payload.multiplicand * action.payload.multiplier2;
        },
    },
});


export const { mul }=counterSlice.actions
export default counterSlice.reducer