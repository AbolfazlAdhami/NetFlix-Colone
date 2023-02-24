import Wrapper from "../../HOC/Wrapper";

import LoginIcon from "@mui/icons-material/Login";
import "./Navbar.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Wrapper>
      <div className={isScroll ? `navbar scrolled` : `navbar`}>
        <div className="container">
          <div className="logo">
            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
          </div>
          <div className="menu">
            {" "}
            <NavLink to="home">
              <span>HomePage</span>
            </NavLink>
            <span>Movies</span>
            <span>My List</span>
          </div>
          <div className="user">
            <div className="auth">
              Sing in
              <LoginIcon className="auth-icon" />
            </div>
            {/* <div className="account"></div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
