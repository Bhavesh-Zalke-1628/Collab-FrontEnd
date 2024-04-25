import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices';
const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    devTools: true
});

export default store;