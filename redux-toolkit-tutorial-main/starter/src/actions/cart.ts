import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from '../config/config';

axios.defaults.baseURL = url;
// "https://course-api.com/react-useReducer-cart-project"

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('react-useReducer-cart-project');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);