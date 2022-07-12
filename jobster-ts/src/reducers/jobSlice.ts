import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import customFetch from "../utils/axios";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { JobState } from "./../interfaces/job";

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
  reducers: {},
});

export default jobSlice.reducer;
