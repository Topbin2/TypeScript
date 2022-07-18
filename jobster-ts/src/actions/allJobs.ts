import { createAsyncThunk } from "@reduxjs/toolkit";

import { CreateAsyncThunkTypes } from "../store/store";
import customFetch from "../utils/axios";
import { AllJobsGetResType } from "../interfaces/allJobs";
import { authHeader } from "../utils";

export const getAllJobs = createAsyncThunk<
  AllJobsGetResType,
  undefined,
  CreateAsyncThunkTypes
>("allJobs/getAllJobs", async (_, thunkAPI) => {
  try {
    const response = await customFetch.get("/jobs", authHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("There was an error");
  }
});
