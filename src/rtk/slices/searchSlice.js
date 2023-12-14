import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    initialState: '',
    name: 'searchSlice',
    reducers: {
        setSearch: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setSearch } = searchSlice.actions
export default searchSlice.reducer;