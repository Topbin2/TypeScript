export interface CartState {
  cartItems: CartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}
