import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        set: (state,action) => {
            state.user = action.payload;
        }
    }
});

export const { set } = userSlice.actions;
export default userSlice.reducer;