import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import { userReducer } from "../reducers/userSlice";
import { jobReducer } from "../reducers/jobSlice";
import { allJobsReducer } from "../reducers/allJobsSlice";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     job: jobReducer,
//     allJobs: allJobsReducer,
//   },
// });

const rootReducer = combineReducers({
  user: userReducer,
  job: jobReducer,
  allJobs: allJobsReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
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
