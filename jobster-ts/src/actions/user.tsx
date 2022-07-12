import { UserState, UserInfo } from "../interfaces/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import { logoutUser } from "../reducers/userSlice";
import { CreateAsyncThunkTypes } from "../store/store";

interface User {
  user: UserInfo;
}

interface IUserData {
  name: string;
  email: string;
  lastName: string;
  location: string;
}

export const registerUser = createAsyncThunk<
  User,
  UserState,
  CreateAsyncThunkTypes
>("user/registerUser", async (user, { rejectWithValue }) => {
  try {
    const response = await customFetch.post("/auth/register", user);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.msg);
  }
});

export const loginUser = createAsyncThunk<
  User,
  UserState,
  CreateAsyncThunkTypes
>("user/loginUser", async (user, { rejectWithValue }) => {
  try {
    const response = await customFetch.post("/auth/login", user);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.msg);
  }
});

export const updateUser = createAsyncThunk<
  User,
  IUserData,
  CreateAsyncThunkTypes
>("user/updateUser", async (user, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const response = await customFetch.patch("/auth/updateUser", user, {
      headers: {
        authorization: `Bearer ${state.user?.user?.token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});
