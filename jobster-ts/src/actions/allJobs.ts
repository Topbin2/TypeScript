import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateAsyncThunkTypes } from "../store/store";
import { AllJobsGetResType, showStatsResponse } from "../interfaces/allJobs";
import { authHeader, customFetch } from "../utils";

export const getAllJobs = createAsyncThunk<
  AllJobsGetResType,
  undefined,
  CreateAsyncThunkTypes
>("allJobs/getAllJobs", async (_, thunkAPI) => {
  try {
    const { page, search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobs;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) url += `&search=${search}`;
    const response = await customFetch.get(url, authHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("There was an error");
  }
});

export const showStats = createAsyncThunk<
  showStatsResponse,
  undefined,
  CreateAsyncThunkTypes
>("allJobs/showStats", async (_, thunkAPI) => {
  try {
    const response = await customFetch.get("/jobs/stats", authHeader(thunkAPI));
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});
