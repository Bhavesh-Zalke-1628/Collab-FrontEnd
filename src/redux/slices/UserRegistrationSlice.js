import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import axiosInstance from "../../Helper/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    userData: localStorage.getItem('userData')
}


export const userRegistration = createAsyncThunk('/process', async (data) => {

    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    const response = axiosInstance.post('/user/swim/register', data, config)
    console.log(response.data)
    toast.promise(response, {
        loading: "Crating new Cource",
        success: "Cource Created Successfully",
        error: "Failed to create Cource"
    })
    console.log(response)
    return (await response).data

})

const userRegistrationSlice = createSlice({
    name: "userRegistrationSlice",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userRegistration.fulfilled, async (state, action) => {
                state.userData = action.payload.data
            })
    }
})



export default userRegistrationSlice.reducer