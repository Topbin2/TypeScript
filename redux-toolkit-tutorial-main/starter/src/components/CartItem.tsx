import { useCallback } from "react";
import { ChevronDown, ChevronUp } from "../assets/icons/icons";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { decrease, increase, removeItem } from "../reducers/cart/cartSlice";

interface IProps {
  id: string;
  img: string;
  title: string;
  price: string;
  amount: number;
}

const CartItem = ({ id, img, title, price, amount }: IProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = useCallback(() => {
    dispatch(removeItem(id));
  }, [dispatch, id]);

  const handleIncreaseAmount = useCallback(() => {
    dispatch(increase(id));
  }, [dispatch, id]);

  const handleDecreaseAmount = useCallback(() => {
    if (amount === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(decrease(id));
  }, [dispatch, id, amount]);

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleDeleteItem}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncreaseAmount}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecreaseAmount}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
