import { configureStore } from "@reduxjs/toolkit";

import user from "../reducers/userSlice";

const store = configureStore({
  reducer: {
    user,
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
