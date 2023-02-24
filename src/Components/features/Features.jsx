import React from "react";
import Wrapper from "../../HOC/Wrapper";

import "./features.scss";

const Features = () => {
  return (
    <Wrapper>
      <div className="features">
        <img
          className="poster"
          src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />

        <div className="email-box">
          <input type="email" className="email" placeholder="Enter your Email and Join ! ! !" />
          <input className="btn" type="button" value="Join Now!!" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
