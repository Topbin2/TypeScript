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
  status: Object;
  monthlyApplications: Array<any>;
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
