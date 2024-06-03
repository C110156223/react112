import { createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({
    name: "text",
    initialState: {
        value: "輸入",
    },
    reducers: {
        updateText: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateText } = textSlice .actions;
export default textSlice .reducer