import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import axiosInstance from "../../Helper/axiosInstance"
import toast from "react-hot-toast"
import { json } from "react-router-dom"

const initialState = {
    registerUserData: localStorage.getItem('userData') || [],
    singleUser: localStorage.getItem('singleUser') || {}
}


export const userRegistration = createAsyncThunk('/process', async (data) => {
    try {

        const response = axiosInstance.post('/user/swim/register', data)
        console.log(response)
        toast.promise(response, {
            loading: "Completing step 1",
            success: "Step one completed successfully",
            error: "Failed to create Cource"
        })
        console.log(response)
        return (await response).data
    } catch (error) {
        console.log(error)
    }
})



export const getUserRegistration = createAsyncThunk('/application', async () => {
    const response = axiosInstance.get('/user/user-info')
    console.log(response.data)
    toast.promise(response, {
        loading: "Wait load the user application's  ",
        success: "Register data load successfully",
        error: "Failed to data"
    })
    console.log(response)
    return (await response).data
})


export const getSingleUSer = createAsyncThunk('/user/profile', async (data) => {
    console.log(data)
    const response = axiosInstance.get(`/user/user-one/${data}`)
    toast.promise(response, {
        loading: "Wait !! Loading the user data",
        success: "User data load successfully",
        error: "Failed to user data"
    })
    console.log((await response).data)
    return (await response).data
})


export const uploadFitness = createAsyncThunk('/fitness', async (data) => {
    console.log(data)
    const response = axiosInstance.post(`/user/swim/document`, data)
    console.log(response)
    toast.promise(response, {
        loading: 'Wait!! Uploading pdf...',
        success: 'File upload successfully',
        error: 'Failed to upload the file'
    })
    return (await response).data
})

const userRegistrationSlice = createSlice({
    name: "userRegistrationSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userRegistration.fulfilled, async (state, action) => {
                console.log(action.payload.user)
                state.registerUserData = action.payload.user
                localStorage.setItem('userData', JSON.stringify(action.payload.user))
            })
            .addCase(getUserRegistration.fulfilled, (state, action) => {
                console.log(action.payload.user)
                state.registerUserData = action.payload.user
                localStorage.setItem('userData', JSON.stringify(action.payload))
            })
            .addCase(uploadFitness.fulfilled, async (state, action) => {
                localStorage.setItem('userData', JSON.stringify(action?.payload?.user))
                state.registerUserData = action.payload.user
            })
            .addCase(getSingleUSer.fulfilled, async (state, action) => {
                state.singleUser = action.payload.user,
                    localStorage.setItem('singleUser', (action.payload.user))
            })
    }
})



export default userRegistrationSlice.reducer