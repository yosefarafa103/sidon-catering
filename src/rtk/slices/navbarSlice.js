import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
    initialState: false,
    name: 'navSlice',
    reducers: {
        setNav: (state) => {
            return !state
        }
    }
})
export const { setNav } = navSlice.actions
export default navSlice.reducer;