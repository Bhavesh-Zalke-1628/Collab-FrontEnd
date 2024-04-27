import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helper/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    userData: {}
}

export const register = createAsyncThunk('/swim-register', async (data) => {
    try {
        const response = axiosInstance.post('/')
        toast.promise(response, {
            loading: "Wait !! Registring on process",
            success: (data) => {
                return data.data
            },
            error: (await response).data.data
        })
    } catch (error) {
        console.log(error)
    }
})




const swimUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.userData = action.payload
            })
    }
})



export default swimUserSlice.reducer