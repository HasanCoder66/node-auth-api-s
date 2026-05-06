import { createSlice } from "@reduxjs/toolkit";
import { signup, login, verifyOtp, resetPassword, forgetPassword } from "./authThunk";


const initialState = {
  currentUser: null,
  loading: false,
  error:null,
  message: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers:(builder) => {
    builder

    // signup ==>
    .addCase(signup.pending, (state) => {state.loading = true})
    .addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message
    })
    .addCase(signup.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload
    })

    // login ==>
    .addCase(login.pending, (state) => {state.loading = true})
    .addCase(login.fulfilled, (state, action) => {
      
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload.data;
      state.token = action.payload.token
      
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    })


     // verifyOtp ==>
    .addCase(verifyOtp.pending, (state) => {
      state.loading = true;
    })
    .addCase(verifyOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null
      

      
    })
    .addCase(verifyOtp.rejected, (state, ) => {
      state.loading = false;
      state.error = "error in verify otp"
    })

         // forgetPassword ==>
    .addCase(forgetPassword.pending, (state) => {
      state.loading = true;
    })
    .addCase(forgetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null
      

      
    })
    .addCase(forgetPassword.rejected, (state, ) => {
      state.loading = false;
      state.error = "error in forget password"
    })

             // reset password ==>
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
    })
    .addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null
      

      
    })
    .addCase(resetPassword.rejected, (state,) => {
      state.loading = false;
      state.error = "error in reset password"
    })

    // .addCase(getTodos.pending, (state) => {
    //     state.loading = true;
    // })
    // .addCase(getTodos.fulfilled, (state,action) => {
    //     state.loading = false;
    //     state.users = action.payload;

    // })
    // .addCase(getTodos.rejected, (state) => {
    //     state.error = "something went wrong"
    // })


  },

  reducers: {
    // signup: (state, action) => {
    //   state.users.push(action.payload);
    // },
    // login: (state, action) => {
    //   const { email, password } = action.payload;
    //   const user = state.users.find(
    //     (user) => user.email == email && user.password == password,
    //   );
    //   if (user) {
    //     state.currentUser = user;
    //   }
    // },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const {logout } = authSlice.actions;
export default authSlice.reducer;