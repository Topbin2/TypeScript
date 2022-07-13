export type JobType = "full-time" | "part-time" | "remote" | "internship";

export type StatusType = "interview" | "declined" | "pending";

export interface FormPayload {
  name: "position" | "company" | "jobType" | "jobLocation" | "status";
  value: string;
}

export interface JobState {
  isLoading: boolean;
  position: string;
  company: string;
  jobLocation: string;
  jobTypeOptions: Array<JobType>;
  jobType: string;
  statusOptions: Array<StatusType>;
  status: string;
  isEditing: boolean;
  editJobId: string;
}
