import Navbars from "./components/Navbars";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./reducers/cart/cartSlice";

function App() {
  const dispatch = useAppDispatch();
  const { cartItems, isLoading } = useAppSelector((state) => state.cart);
  const { isOpen } = useAppSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbars />
      <CartContainer />
    </main>
  );
}
export default App;
