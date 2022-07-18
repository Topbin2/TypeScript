import { getAllJobs } from "./allJobs";
import { CreateAsyncThunkTypes } from "./../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import { clearValues } from "../reducers/jobSlice";
import { logoutUser } from "../reducers/userSlice";
import { CreateJobBody, CreateJobResponse } from "../interfaces/job";
import { hideLoading, showLoading } from "../reducers/allJobsSlice";

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

export const deleteJob = createAsyncThunk<
  string,
  string,
  CreateAsyncThunkTypes
>("job/deleteJob", async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await customFetch.delete(`jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return response.data.msg;
  } catch (error: any) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});
