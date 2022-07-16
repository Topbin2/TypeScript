export interface AllJobsFilteredState {
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: Array<string>;
}

export interface AllJobsState extends AllJobsFilteredState {
  isLoading: boolean;
  jobs: Array<any>;
  totalJobs: number;
  numOfPages: number;
  page: number;
  status: Object;
  monthlyApplications: Array<any>;
}

export interface AllJobsGetResType {
  jobs: Job[];
  totalJobs: number;
  numOfPages: number;
}

export interface Job {
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
