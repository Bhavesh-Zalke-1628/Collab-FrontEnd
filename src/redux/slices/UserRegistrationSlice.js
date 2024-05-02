import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    userData: localStorage.getItem('userData')
}


export const userRegistration = createAsyncThunk('/process', async (data) => {

    const response = await axiosInstance.post('/user/swim/register')
    console.log(response)
})

const userRegistrationSlice = createSlice({
    name: "userRegistrationSlice",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => { }
})



export default userRegistrationSlice.reducer