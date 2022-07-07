import { UserState, UserInfo } from "./../interfaces/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";

interface User {
  user: UserInfo;
}

export const registerUser = createAsyncThunk<
  User,
  UserState,
  {
    rejectValue: string;
  }
>("user/registerUser", async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/register", user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user: UserState, thunkAPI) => {
    console.log(`Login User : ${JSON.stringify(user)}`);
  }
);
