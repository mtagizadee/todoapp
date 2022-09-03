import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import helpers from "../../helpers";

export const apiBaseURL = 'http://localhost:5000/'

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
            localStorage.setItem('token', value);
            state.isAuth = value;
        },
        giveAccess: (state,action) => {
            authSlice.caseReducers.setIsAuth(true);
            authSlice.caseReducers.setToken(action);
        },
        login: async (state,action) => {
            try {
                const response = await axios.post(apiBaseURL + 'auth/login',action);
                authSlice.caseReducers.giveAccess(response.data.token);
            } catch (error) {
                alert(error)
            }
        },
        signup: async (state, action) => {
            try {
                const response = await axios.post(apiBaseURL + 'auth/signup',action);
                authSlice.caseReducers.giveAccess(response.data.token);
            } catch (error) {
                alert(error);
            }
        },
        signOut: async (state) => {
            authSlice.caseReducers.setIsAuth(false);
            authSlice.caseReducers.setToken('');
            localStorage.clear();
            const config = { headers: helpers.generateAuthHeader(state.token) }
            try {
                await axios.delete(apiBaseURL + 'session',config);
            } catch (error) {
                alert(error);
            }
        }
    }
});

export const { setIsAuth, setToken, giveAccess, login, signup, signOut } = authSlice.actions;
export default authSlice.reducer;