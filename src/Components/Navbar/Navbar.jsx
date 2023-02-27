import Wrapper from "../../HOC/Wrapper";

import LoginIcon from "@mui/icons-material/Login";
import "./Navbar.scss";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user.login) {
      setUserName(user.userName);
      setLogin(true);
    }
  }, [user]);
  return (
    <Wrapper>
      <div className={isScroll ? `navbar scrolled` : `navbar`}>
        <div className="container">
          <div className="logo">
            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
          </div>
          <div className="menu">
            {" "}
            <NavLink to="home ">
              <span>HomePage</span>
            </NavLink>
            <NavLink to={"movies"}>
              <span>Movies</span>
            </NavLink>
            <NavLink to="user">
              <span>My List</span>
            </NavLink>
          </div>
          <div className="user">
            {!login ? (
              <Link to="auth">
                <div className="auth">
                  Sing in
                  <LoginIcon className="auth-icon" />
                </div>
              </Link>
            ) : (
              <NavLink to="user">
                <div className="account">{userName}</div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
