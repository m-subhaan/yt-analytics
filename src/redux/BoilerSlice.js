import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    category: "",
    query: "",
    page: 1,
};

const boilerSlice = createSlice({
    name: "boiler",
    initialState: initialState,
    reducers: {
        storeResults: (state, action) => {
            state.list = action.payload.list;
            state.category = action.payload.category;
            state.query = action.payload.query;
            state.page = action.payload.page;
        },
        clearResults: (state) => {
            state.list = initialState.list;
            state.category = initialState.category;
            state.query = initialState.query;
            state.page = initialState.page;
        }
    }
});

export const { storeResults, clearResults } = boilerSlice.actions;
export default boilerSlice.reducer;