import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = `http://localhost:8500/api/auth/`

// signup thunk
export const signup = createAsyncThunk("signup", async (userData, {rejectWithValue}) => {
    // console.log(userData)
    try {
       const apiRes = await axios.post(`${baseURL}signup`, userData)

    //    const {message, status, password, ...others} = apiRes.data
       return apiRes.data
    } catch (error) {
      return rejectWithValue(error.response.data.message || "signup failed")
    }
})


// login thunk
export const login = createAsyncThunk(`login`, async (data, {rejectWithValue}) => {
    console.log(data , "data in async thunk of login..")
    try {
       const apiRes = await axios.post(`${baseURL}login`,data)
       
       if(apiRes.data.token) {
        localStorage.setItem("token", apiRes.data.token)
       }

       return apiRes.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || "failed to login")
    }
})

// verifyOtp thunk
export const forgetPassword = createAsyncThunk(`forgetPassword`, async (data, {rejectWithValue}) => {
    try {
       const apiRes = await axios.post(`${baseURL}forget-password`,data)
    
       return apiRes.data;

    } catch (error) {
        return rejectWithValue(error.response.data.message || "failed to forget password")
    }
})


// verifyOtp thunk

export const verifyOtp = createAsyncThunk(`verifyOtp`, async (data, {rejectWithValue}) => {
    try {
       const apiRes = await axios.post(`${baseURL}verify-otp`, data)
       console.log(apiRes)

       return apiRes.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || "failed to verify otp")
    }
})


// resetPassword thunk
export const resetPassword = createAsyncThunk(`resetPassword`, async (data, {rejectWithValue}) => {
    try {
       const apiRes = await axios.post(`${baseURL}reset-password`,data)
       return apiRes.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message || "failed to reset password")
    }
})