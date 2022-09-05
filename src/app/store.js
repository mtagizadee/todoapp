import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/slices/authSlice';
import userReducer from '../features/slices/userSlice';
import {todosApi} from "../features/api/todosApi";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }).concat(todosApi.middleware)
});

setupListeners(store.dispatch);
