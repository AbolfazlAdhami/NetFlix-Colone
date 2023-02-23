import Wrapper from "../../HOC/Wrapper";
import Icon from "@mdi/react";
import { mdiMagnify, mdiBellRing, mdiMenuDown } from "@mdi/js";
import "./Navbar.scss";
import { useState } from "react";

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
          <div className="right">
            {" "}
            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
            <span>HomePage</span>
            <span>Movies</span>
            <span>My List</span>
          </div>
          <div className="left"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
