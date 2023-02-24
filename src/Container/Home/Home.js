import React from "react";
import Wrapper from "../../HOC/Wrapper";
import List from "../../Components/List/List";
import Features from "../../Components/features/Features";
import { ThreeDots } from "react-loader-spinner";

import "./Home.scss";
import { useSelector } from "react-redux";
const Home = () => {
  const { status } = useSelector((state) => state);
  console.log(status);
  return (
    <Wrapper>
      <Features />
      {status == "succses" ? (
        <List />
      ) : (
        <div className="loader">
          <ThreeDots height="200" width="200" radius="9" color="#ea2027" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
        </div>
      )}
    </Wrapper>
  );
};

export default Home;
