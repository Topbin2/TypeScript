import { getAllJobs } from "./allJobs";
import { CreateAsyncThunkTypes } from "./../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import { clearValues } from "../reducers/jobSlice";
import { logoutUser } from "../reducers/userSlice";
import {
  CreateJobBody,
  CreateJobResponse,
  EditJobActionPayload,
  EditJobResponse,
} from "../interfaces";
import { hideLoading, showLoading } from "../reducers/allJobsSlice";
import { authHeader } from "../utils/axios";

export const createJob = createAsyncThunk<
  CreateJobResponse,
  CreateJobBody,
  CreateAsyncThunkTypes
>("job/createJob", async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job, authHeader(thunkAPI));
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

export const editJob = createAsyncThunk<
  EditJobResponse,
  EditJobActionPayload,
  CreateAsyncThunkTypes
>("job/editJob", async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(
      `/jobs/${jobId}`,
      job,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error: any) {
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
    const response = await customFetch.delete(
      `jobs/${jobId}`,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(getAllJobs());
    return response.data.msg;
  } catch (error: any) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});
