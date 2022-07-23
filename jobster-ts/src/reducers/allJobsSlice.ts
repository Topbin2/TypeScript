import { toast } from "react-toastify";
import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";

import { getAllJobs, showStats } from "./../actions/allJobs";
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
  stats: { pending: null, interview: null, declined: null },
  monthlyApplications: [],
  ...initialFilteredState,
};

export type FilterType = {
  name: keyof AllJobsFilteredState;
  value: any;
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (
      state,
      { payload: { name, value } }: PayloadAction<FilterType>
    ) => {
      // state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilteredState };
    },
  },
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
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      }),
});

export const { showLoading, hideLoading } = allJobsSlice.actions;
export const allJobsReducer: Reducer<typeof initialState> =
  allJobsSlice.reducer;
