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

  },
});

export default userSlice.reducer;
