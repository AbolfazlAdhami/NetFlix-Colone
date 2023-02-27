import React from "react";
import Wrapper from "../../HOC/Wrapper";
import List from "../../Components/List/List";
import Features from "../../Components/features/Features";

import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { useEffect } from "react";
import { updataUser } from "../../store/userSlice";
const Home = () => {
  const { status } = useSelector((state) => state.home);
  const { user } = useSelector((state) => state);
  const { favoritList } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.login) {
      dispatch(updataUser(user));
    }
  }, [user]);
  useEffect(() => {
    if (user.login) {
      dispatch(updataUser(user));
    }
  }, [favoritList]);
  return (
    <Wrapper>
      <Features />
      {status == "succses" ? <List /> : <Loader />}
    </Wrapper>
  );
};

export default Home;
