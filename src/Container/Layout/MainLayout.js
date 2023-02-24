import React from "react";
import Wrapper from "../../HOC/Wrapper";
import NavBar from "../../Components/Navbar/Navbar";
import "./MainLayout.scss";

function MainLayout(props) {
  return (
    <Wrapper>
      <div className="layout">
        <NavBar />
        {props.children}
      </div>
    </Wrapper>
  );
}

export default MainLayout;
