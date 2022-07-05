import { CartState } from "./../../interfaces/cart";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import { url } from "../../config/config";

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item && item.amount++;
    },
    decrease: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item && item.amount--;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
