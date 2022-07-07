import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, CartItem } from "./../../interfaces/cart";
import { getCartItems } from "../../actions/cart";

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item && item.amount++;
    },
    decrease: (state, action: PayloadAction<string>) => {
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
      .addCase(getCartItems.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      }),
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
