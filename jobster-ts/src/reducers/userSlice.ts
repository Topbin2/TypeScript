import { toast } from "react-toastify";
import { IUserState } from "./../interfaces/user";
import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/user";

const initialState: IUserState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // login
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        console.log(payload);
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello There`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      }),
});

export default userSlice.reducer;
