import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";
import { getUserFromLocalStorage } from "../utils/localStorage";

interface JobState {
  isLoading: boolean;
  position: string;
  company: string;
  jobLocation: string;
  jobTypeOptions: Array<JobType>;
  jopType: JobType;
  statusOptions: Array<StatusType>;
  status: StatusType;
  isEditing: boolean;
  editJobId: string;
}

type JobType = "full-time" | "part-time" | "remote" | "internship";
type StatusType = "interview" | "declined" | "pending";

const initialState: JobState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jopType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};
