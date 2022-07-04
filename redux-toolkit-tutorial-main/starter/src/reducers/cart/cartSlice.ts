import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  cartItems: string[],
  amount: number,
  total: number,
  isLoading: boolean,
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  }
})

// console.log(cartSlice);

export default cartSlice.reducer;