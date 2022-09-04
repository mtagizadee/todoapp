import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: localStorage.getItem('isAuth') === 'true',
        token: localStorage.getItem('token')
    },
    reducers: {
        setIsAuth: (state,action) => {
            const value = action.payload;
            localStorage.setItem('isAuth', String(value));
            state.isAuth = value;
        },
        setToken: (state, action) => {
            const value = action.payload;
            localStorage.setItem('token',value);
            state.token = value;
        },
        giveAccess: (state,action) => {
            authSlice.caseReducers.setIsAuth(state, true);
            authSlice.caseReducers.setToken(state, action.payload);
        }
    }
});

export const { setIsAuth, setToken, giveAccess, login, signup, signOut } = authSlice.actions;
export default authSlice.reducer;