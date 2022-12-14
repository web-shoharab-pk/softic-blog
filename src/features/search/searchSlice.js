import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    search: ""
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search: (state, action) => {
            state.search = action.payload; 
        },
        reset: (state, action) => {
            state.search = undefined; 
        }
    }
});

export const { search, reset } = searchSlice.actions;
export default searchSlice.reducer;