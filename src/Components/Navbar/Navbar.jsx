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
                                                <span>Seriese</span>
                                                <span>Movies</span>
                                                <span>New and Popular</span>
                                                <span>My List</span>
                                        </div>
                                        <div className="left">
                                                <Icon path={mdiMagnify} size={1} className="icon" />
                                                <span>KID</span>
                                                <Icon path={mdiBellRing} size={1} className="icon" />
                                                <div className="profile">
                                                        <img
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                alt=""
                                                        />
                                                        <Icon path={mdiMenuDown} size={1} className="icon" />
                                                        <div className="option">
                                                                <span>Setting</span>
                                                                <span>Log Out</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </Wrapper>
        );
};

export default NavBar;
