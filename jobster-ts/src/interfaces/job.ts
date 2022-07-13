export type JobType = "full-time" | "part-time" | "remote" | "internship";

export type StatusType = "interview" | "declined" | "pending";

export type FormName =
  | "position"
  | "company"
  | "jobType"
  | "jobLocation"
  | "status";

export interface FormPayload {
  name: FormName;
  value: string;
}

export interface CreateJobBody {
  position: string;
  company: string;
  jobType: string;
  jobLocation: string;
  status: string;
}

export interface CreateJobResponse {
  job: {
    company: string;
    position: string;
    status: string;
    jobType: string;
    jobLocation: string;
    createdBy: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };
}

export interface JobState {
  isLoading: boolean;
  position: string;
  company: string;
  jobLocation: string | undefined;
  jobTypeOptions: Array<JobType>;
  jobType: string;
  statusOptions: Array<StatusType>;
  status: string;
  isEditing: boolean;
  editJobId: string;
}
