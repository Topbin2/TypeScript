import { UserState, UserInfo } from "./../interfaces/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import { IUserState } from "../interfaces/user";
import { RootState } from "../store/store";

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

interface RootReducer {
  user: IUserState;
}

export const updateUser = createAsyncThunk<
  User,
  IUserData,
  {
    rejectValue: string;
    state: RootReducer;
  }
>("user/updateUser", async (user, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const response = await customFetch.patch("/auth/updateUser", user, {
      headers: {
        authorization: `Bearer ${state.user?.user?.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});
