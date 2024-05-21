
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axios from "axios"
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    RegisterKey: "",
    RegistraterSubscription_id: "",
    RegisterisPaymentVerified: false,
    status: ""
}

export const getRazorPayId = createAsyncThunk("/razorpay/getId", async () => {
    try {
        console.log('getRazorPayId')
        const response = await axiosInstance.get('/user/payment/razorpay-key/getid');
        console.log('getRazorPayId response', response)
        return response.data;
    } catch (error) {
        toast.error("Failed to load data");
    }
})


export const purchaseCourseBundle = createAsyncThunk("/purchaseCourse", async () => {
    console.log('purchaseCourseBundle')
    try {
        const response = await axiosInstance.post('/user/payment/razorpay/subscribe');
        console.log('response', response)

        console.log(response)
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});


export const verifyUserPayment = createAsyncThunk("/payments/verify", async (data) => {
    try {
        const response = await axiosInstance.post('/user/payment/razorpay/verify', {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_subscription_id: data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});


const userPaymentSlice = createSlice({
    name: "userRegistration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRazorPayId.fulfilled, (state, action) => {
                console.log('getRazorPayId', action.payload)
                state.RegisterKey = action?.payload?.key;
            })
            .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
                console.log('action in purchaseCourseBundle full >', action.payload)
                console.log(action.payload.data)
                // toast.success(action?.payload.data?.msg)
                state.RegistraterSubscription_id = action?.payload?.subscription_id;
            })
            .addCase(verifyUserPayment.rejected, (state, action) => {
                console.log('action in  verifyUserPayment rejected >', action)
                toast.success(action?.payload?.msg);
                state.RegisterisPaymentVerified = action?.payload?.success;
            })

            .addCase(verifyUserPayment.fulfilled, (state, action) => {
                toast.success(action?.payload?.msg);
                state.RegisterisPaymentVerified = action?.payload?.success;
                state.status = action?.asubscription?.status
            })

    }
});

export default userPaymentSlice.reducer;