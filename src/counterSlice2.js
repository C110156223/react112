import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const counterSlice2 = createSlice({
    name: "counter2",
    initialState: {
        value: 0,
    },
    reducers: {
        increment2: (state) => {
            state.value += 2;
        },
        decrement2: (state) => {
            state.value -= 2;
        },
        incrementByAmount2: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment2, decrement2, incrementByAmount2 } = counterSlice2.actions;
export default counterSlice2.reducer