import { UserState, UserInfo } from "../interfaces/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import { IUserState } from "../interfaces/user";
import { logoutUser } from "../reducers/userSlice";

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
  {
    rejectValue: string;
  }
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
  {
    rejectValue: string;
  }
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
  {
    rejectValue: string;
    state: { user: IUserState };
  }
>("user/updateUser", async (user, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const response = await customFetch.patch("/auth/updateUser", user, {
      headers: {
        authorization: `Bearer ${state.user?.user?.token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});
