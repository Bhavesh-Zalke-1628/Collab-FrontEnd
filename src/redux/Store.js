import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices';
import UserRegistrationSlice from './slices/UserRegistrationSlice';
import paymentSlice from './slices/paymentSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        registerUser: UserRegistrationSlice,
        razorpay: paymentSlice,
    },
    devTools: true
});

export default store;