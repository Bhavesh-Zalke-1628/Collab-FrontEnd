import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices';
import paymentSlice from './slices/paymentSlice';
import userPaymentSlice from './slices/registrationPaymentSlice'
import UserRegistrationSlice from './slices/UserRegistrationSlice'
const store = configureStore({
    reducer: {
        auth: authSlice,
        registerUser: UserRegistrationSlice,
        razorpay: paymentSlice,
        userRegistration: userPaymentSlice
    },
    devTools: true
});

export default store;