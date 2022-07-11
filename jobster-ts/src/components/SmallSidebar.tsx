import { useCallback } from "react";

import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleSidebar } from "../reducers/userSlice";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const SmallSidebar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const toggle = useCallback(() => {
    dispatch(toggleSidebar);
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
          <div className="nav-links">
            {links.map((link) => {
              const { id, text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  key={id}
                  onClick={toggle}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
