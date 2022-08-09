import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import { userReducer } from "../reducers/userSlice";
import { jobReducer } from "../reducers/jobSlice";
import { allJobsReducer } from "../reducers/allJobsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  job: jobReducer,
  allJobs: allJobsReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export type CreateAsyncThunkTypes = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
};

export default setupStore;
