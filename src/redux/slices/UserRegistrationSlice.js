import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import axiosInstance from "../../Helper/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    registerUserData: localStorage.getItem('userData')
}


export const userRegistration = createAsyncThunk('/process', async (data) => {
    const response = axiosInstance.post('/user/swim/register', data)
    console.log(response.data)
    toast.promise(response, {
        loading: "Completing step 1",
        success: "Step one completed successfully",
        error: "Failed to create Cource"
    })
    console.log(response)
    return (await response).data
})



export const getUserRegistration = createAsyncThunk('/application', async (data) => {
    const response = axiosInstance.get('/user/user-info', data)
    console.log(response.data)
    toast.promise(response, {
        loading: "Wait load the user application's  ",
        success: "Register data load successfully",
        error: "Failed to data"
    })
    console.log(response)
    return (await response).data
})

const userRegistrationSlice = createSlice({
    name: "userRegistrationSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userRegistration.fulfilled, async (state, action) => {
                state.registerUserData = action.payload.data
            })
            .addCase(getUserRegistration.fulfilled, (state, action) => {
                console.log(action.payload)
                state.registerUserData = action.payload.user
            })
    }
})



export default userRegistrationSlice.reducer