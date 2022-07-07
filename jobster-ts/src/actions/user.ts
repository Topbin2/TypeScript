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
>("user/registerUser", async (user, { rejectWithValue }) => {
  try {
    const response = await customFetch.post("/auth/register", user);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});

export const loginUser = createAsyncThunk<
  User,
  UserState,
  {
    rejectValue: string;
  }
>("user/loginUser", async (user, { rejectWithValue }) => {
  try {
    const response = await customFetch.post("/auth/login", user);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});
