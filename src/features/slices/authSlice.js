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
            const value = action;
            localStorage.setItem('isAuth', String(value));
            state.isAuth = value;
        },
        setToken: (state, action) => {
            console.log(action);
            const value = action;
            localStorage.setItem('token', value);
            state.isAuth = value;
        },
        giveAccess: (state,action) => {
            authSlice.caseReducers.setIsAuth(state, true);
            authSlice.caseReducers.setToken(state, action);
        },
        login: async (state,action) => {
            try {
                const response = await axios.post(apiBaseURL + 'auth/login',action.payload);
                authSlice.caseReducers.giveAccess(state, response.data.token);
            } catch (error) {
                alert(error)
            }
        },
        signup: async (state, action) => {
            try {
                const response = await axios.post(apiBaseURL + 'auth/signup',action.payload);
                authSlice.caseReducers.giveAccess(state, response.data.token);
            } catch (error) {
                alert(error);
            }
        },
        signOut: async (state) => {
            authSlice.caseReducers.setIsAuth(state, false);
            authSlice.caseReducers.setToken(state, '');
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