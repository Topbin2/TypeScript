import Navbars from "./components/Navbars";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useEffect } from "react";
import { calculateTotals } from "./reducers/cart/cartSlice";

function App() {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      <Modal />
      <Navbars />
      <CartContainer />
    </main>
  );
}
export default App;
