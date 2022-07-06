import { IUserState } from './../interfaces/user';
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '../actions/user';

const initialState: IUserState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => builder
    // login
    .addCase(loginUser.pending, (state, action) => {

    })
});

export default userSlice.reducer;
