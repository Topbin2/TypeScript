export type JobType = "full-time" | "part-time" | "remote" | "internship";

export type StatusType = "interview" | "declined" | "pending";

export interface JobState {
  isLoading: boolean;
  position: string;
  company: string;
  jobLocation: string;
  jobTypeOptions: Array<JobType>;
  jobType: JobType;
  statusOptions: Array<StatusType>;
  status: StatusType;
  isEditing: boolean;
  editJobId: string;
}