import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import customFetch from "../utils/axios";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { JobState, FormPayload } from "./../interfaces/job";
import { createJob } from "../actions/job";

const initialState: JobState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload }: PayloadAction<FormPayload>) => {
      const { name, value } = payload;
      state[name] = value;
    },
    clearValues: () => {
      return initialState;
    },
  },
  extraReducers: (builder) =>
    builder
      //createJob
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Job Created");
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      }),
});

export const { handleChange, clearValues } = jobSlice.actions;

export default jobSlice.reducer;
