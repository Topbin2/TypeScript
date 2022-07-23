export interface AllJobsFilteredState {
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: Array<string>;
}

export interface AllJobsState extends AllJobsFilteredState {
  isLoading: boolean;
  jobs: Array<JobType>;
  totalJobs: number;
  numOfPages: number;
  page: number;
  stats: DefaultStats;
  monthlyApplications: Array<MonthlyApplication>;
}

export interface AllJobsGetResType {
  jobs: JobType[];
  totalJobs: number;
  numOfPages: number;
}

export interface JobType {
  _id: string;
  company: string;
  position: string;
  status: string;
  jobType: string;
  jobLocation: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface showStatsResponse {
  defaultStats: DefaultStats;
  monthlyApplications: MonthlyApplication[];
}

export interface DefaultStats {
  pending: number | null;
  interview: number | null;
  declined: number | null;
}

export interface MonthlyApplication {
  date: string;
  count: number;
}

export type NameType = "search" | "searchStatus" | "searchType" | "sort";

export type FilterType = {
  name: NameType;
  value: string;
};
