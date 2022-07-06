import { createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
  name?: string;
}

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user: UserState, thunkAPI) => {
    console.log(`Register User : ${JSON.stringify(user)}`);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user: UserState, thunkAPI) => {
    console.log(`Login User : ${JSON.stringify(user)}`);
  }
);
