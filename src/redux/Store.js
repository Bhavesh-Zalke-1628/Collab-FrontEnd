import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices';
import UserRegistrationSlice from './slices/UserRegistrationSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        registerUser: UserRegistrationSlice
    },
    devTools: true
});

export default store;