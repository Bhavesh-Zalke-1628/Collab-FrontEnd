
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axios from "axios"
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVerified: false,
    status: ""
}

export const getRazorPayId = createAsyncThunk("/razorpay/getId", async () => {
    try {
        console.log('getRazorPayId')
        const response = await axiosInstance.get(`/payment/razorpay-key/getid`);
        return response.data;
    } catch (error) {
        toast.error("Failed to load data");
    }
})


export const purchaseCourseBundle = createAsyncThunk("/purchaseCourse", async (data) => {
    console.log('purchaseCourseBundle data', data)
    try {
        const response = axiosInstance.post('/payment/razorpay/subscribe', data);
        console.log(response.data)
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});


export const verifyUserPayment = createAsyncThunk("/payments/verify", async (data) => {
    console.log(data)
    try {
        const response = await axiosInstance.post(`/payment/razorpay/verify/${data[1]}`, {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_subscription_id: data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});





const paymentSlice = createSlice({
    name: "razorpay",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRazorPayId.fulfilled, (state, action) => {
                state.key = action?.payload?.key;
            })
            .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
                console.log('action in  verifyUserPayment full >', action)
                state.subscription_id = action?.payload?.subscription_id;
            })
            .addCase(verifyUserPayment.rejected, (state, action) => {
                console.log('action in  verifyUserPayment rejected >', action)
                toast.success(action?.payload?.message);
                state.isPaymentVerified = action?.payload?.success;
            })

            .addCase(verifyUserPayment.fulfilled, (state, action) => {
                toast.success(action?.payload?.message);
                state.isPaymentVerified = action?.payload?.success;
                state.status = action?.asubscription?.status
            })
        // .addCase(getPaymentRecord.fulfilled, (state, action) => {
        //     console.log(action.payload)
        //     state.allPayments = action?.payload?.allPayments;
        //     state.finalMonths = action?.payload?.finalMonths;
        //     state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
        // })
    }
});

export default paymentSlice.reducer;