import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/slices/authSlice';
import userReducer from '../features/slices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});
