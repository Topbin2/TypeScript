import { useAppDispatch } from "../hooks/useAppDispatch";
import { closeModal } from "../reducers/modal/modalSlice";
import { clearCart } from "../reducers/cart/cartSlice";
import { useCallback } from "react";

const Modal = () => {
  const dispatch = useAppDispatch();

  const onClickClearCart = useCallback(() => {
    dispatch(clearCart());
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => dispatch(closeModal())}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={onClickClearCart}
          >
            clear
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
