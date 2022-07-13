import { CreateAsyncThunkTypes } from "./../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import { clearValues } from "../reducers/jobSlice";
import { logoutUser } from "../reducers/userSlice";
import { CreateJobBody, CreateJobResponse } from "../interfaces/job";

export const createJob = createAsyncThunk<
  CreateJobResponse,
  CreateJobBody,
  CreateAsyncThunkTypes
>("job/createJob", async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
});
