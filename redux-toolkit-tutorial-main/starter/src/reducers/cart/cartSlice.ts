import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

interface CartState {
  cartItems: CartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}

interface CartItem {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}

const initialState: CartState = {
  cartItems: cartItems,
  amount: 5,
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
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
