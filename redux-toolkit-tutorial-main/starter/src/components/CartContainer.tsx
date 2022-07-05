import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useCallback } from "react";

import { clearCart } from "../reducers/cart/cartSlice";
import { openModal } from "../reducers/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useAppDispatch();
  const { cartItems, amount, total } = useAppSelector((state) => state.cart);

  const handleDeleteItems = useCallback(() => {
    dispatch(openModal());
    // dispatch(clearCart());
  }, [dispatch]);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleDeleteItems}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
