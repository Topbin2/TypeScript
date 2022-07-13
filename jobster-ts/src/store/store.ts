import { configureStore } from "@reduxjs/toolkit";

import user from "../reducers/userSlice";
import job from "../reducers/jobSlice";
import allJobs from "../reducers/allJobsSlice";

const store = configureStore({
  reducer: {
    user,
    job,
    allJobs,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CreateAsyncThunkTypes = {
  dispatch: any;
  state: any;
  rejectValue: string;
};

export default store;
