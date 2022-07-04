import { useAppSelector } from "../hooks/useAppSelector";
import { CartIcon } from "../icons";

const Navbars = () => {
  const { amount } = useAppSelector((state) => state.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
