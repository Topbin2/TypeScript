import { useCallback } from "react";

import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleSidebar } from "../reducers/userSlice";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const toggle = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
