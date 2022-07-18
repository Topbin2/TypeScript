import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getUserFromLocalStorage } from "../utils/localStorage";
import { JobState, FormPayload, SetEditJobPayload } from "./../interfaces/job";
import { createJob, deleteJob } from "../actions/job";

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
    clearValues: (): JobState => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
    setEditJob: (state, { payload }: PayloadAction<SetEditJobPayload>) => {
      return {
        ...state,
        isEditing: true,
        ...payload,
      };
    },
  },
  extraReducers: (builder) =>
    builder
      //createJob
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job Created");
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload);
      }),
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
