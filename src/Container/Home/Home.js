import React from "react";
import Wrapper from "../../HOC/Wrapper";
import List from "../../Components/List/List";
import Features from "../../Components/features/Features";

import "./Home.scss";
import { useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
const Home = () => {
  const { status } = useSelector((state) => state.home);
  console.log(status);
  return (
    <Wrapper>
      <Features />
      {status == "succses" ? <List /> : <Loader />}
    </Wrapper>
  );
};

export default Home;
