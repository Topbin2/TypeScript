import { IUserState } from './../interfaces/user';
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUserState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    log: (state) => {
      console.log(state.isLoading);
    }
  },
});

export const { log } = userSlice.actions;
export default userSlice.reducer;
