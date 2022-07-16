import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

import { getAllJobs } from "./../actions/allJobs";
import { AllJobsFilteredState, AllJobsState } from "./../interfaces/allJobs";

const initialFilteredState: AllJobsFilteredState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState: AllJobsState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  status: {},
  monthlyApplications: [],
  ...initialFilteredState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //getAllJobs
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      }),
});

export default allJobsSlice.reducer;
