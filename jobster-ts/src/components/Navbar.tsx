import { useState, useCallback } from "react";

import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../hooks";
import Logo from "./Logo";
import { toggleSidebar, logoutUser } from "../reducers/userSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const toggle = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout((prev) => !prev)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
