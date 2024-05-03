import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices';
import swimUserSlice from './slices/SwmmingRegistrationSlice'
import UserRegistrationSlice from './slices/UserRegistrationSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        swimUser: swimUserSlice,
        userRegister: UserRegistrationSlice
    },
    devTools: true
});

export default store;