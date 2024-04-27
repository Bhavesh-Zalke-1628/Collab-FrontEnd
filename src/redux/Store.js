import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices';
import swimUserSlice from './slices/SwmmingRegistrationSlice'
const store = configureStore({
    reducer: {
        auth: authSlice,
        swimUser: swimUserSlice
    },
    devTools: true
});

export default store;