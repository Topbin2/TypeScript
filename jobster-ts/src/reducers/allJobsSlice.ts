import { toast } from "react-toastify";
import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";

import { getAllJobs, showStats } from "./../actions/allJobs";
import {
  AllJobsFilteredState,
  AllJobsState,
  FilterType,
} from "./../interfaces/allJobs";

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
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilteredState };
    },
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    clearAllJobsState: () => initialState,
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
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
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

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = allJobsSlice.actions;
export const allJobsReducer: Reducer<typeof initialState> =
  allJobsSlice.reducer;
