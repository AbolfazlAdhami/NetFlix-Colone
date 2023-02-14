import React from "react";
import Wrapper from "../../HOC/Wrapper";
import NavBar from "../../Components/Navbar/Navbar";

import "./MainLayout.scss";
import Features from "../../Components/features/Features";
import List from "../../Components/List/List";
function MainLayout(props) {
        return (
                <Wrapper>
                        <div className="layout">
                                <NavBar />
                                <Features type={"Seriese"} />
                                <List />
                                {props.children}
                        </div>
                </Wrapper>
        );
}

export default MainLayout;
