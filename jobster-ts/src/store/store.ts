import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "../reducers/userSlice";
import { jobReducer } from "../reducers/jobSlice";
import { allJobsReducer } from "../reducers/allJobsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    allJobs: allJobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CreateAsyncThunkTypes = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
};

export default store;
