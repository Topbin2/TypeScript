import { createSlice } from "@reduxjs/toolkit";

interface AllJobsFilteredState {
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: Array<string>;
}

interface AllJobsState extends AllJobsFilteredState {
  isLoading: boolean;
  jobs: Array<any>;
  totalJobs: number;
  numOfPages: number;
  page: number;
  status: Object;
  monthlyApplications: Array<any>;
}

const initialFilteredState: AllJobsFilteredState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState: AllJobsState = {
  isLoading: true,
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
});

export default allJobsSlice.reducer;
