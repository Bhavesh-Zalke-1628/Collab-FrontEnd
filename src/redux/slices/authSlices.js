import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    data: (localStorage.getItem('data')) || {}
}



export const createAccount = createAsyncThunk("/register", async (data) => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    try {
        console.log('hello')
        const res = axiosInstance.post("/auth/register", data, config);
        console.log(res)
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                console.log(data)
                return data?.data?.msg;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.msg);
    }
})

export const loginAdmin = createAsyncThunk("/auth/login", async (data) => {
    console.log(data.email)
    try {
        console.log(data)
        const res = axiosInstance.post("/auth/login/admin", data);
        toast.promise(res, {
            loading: "Wait! Authentication in process",
            success: (data) => {
                return data?.data?.msg;
            },
            error: "Failed to login"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data);
    }
})


export const loginUser = createAsyncThunk("/login", async (data) => {
    console.log(data)
    try {
        console.log(data)
        const res = axiosInstance.post("/auth/login", data);
        toast.promise(res, {
            loading: "Wait! Authentication in process",
            success: (data) => {
                return data?.data?.msg;
            },
            error: "Failed to login"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data);
    }
})


export const logout = createAsyncThunk("/logout", async () => {
    try {
        const res = axiosInstance.get('/auth/logout')
        toast.promise(res, {
            loading: "Wait! Logging out",
            success: (data) => {
                return data?.data?.msg;
            },
            error: 'failed to logout'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})


export const updateProfile = createAsyncThunk("/user/update/profile", async (data) => {
    console.log(data[1])
    try {
        const res = axiosInstance.put(`/auth/update/${data[0]}`, data[1]);
        toast.promise(res, {
            loading: "Wait! Update profile in progress",
            success: (data) => {
                return data;
            },
            error: 'failed update a profile'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
})



export const getUserData = createAsyncThunk("/user/details", async () => {
    try {
        const res = axiosInstance.get("/auth/me")
        console.log(res)
        return (await res).data;
    } catch (error) {
        toast.error(error.message);
    }
})


const authSlice = createSlice({
    name: ' auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                localStorage.setItem('data', JSON.stringify(action?.payload?.user))
                localStorage.setItem('isLoggedIn', true);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear()
                state.data = {};
                state.isLoggedIn = false
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                if (!action?.payload?.user) return;
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", true);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
            });
    }
})

// export const { } = authSlice.actions;
export default authSlice.reducer;