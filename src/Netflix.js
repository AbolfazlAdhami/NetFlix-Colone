import React, { Component } from "react";
import MainLayout from "./Container/Layout/MainLayout";
import Home from "./Container/Home/Home";
import { Route, Routes, redirect } from "react-router";
import SinglePage from "./Container/SinglePage/SinglePage";
import Auth from "./Container/Auth/Auth";
import User from "./Container/User/User";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Movies from "./Container/Movies/Movies";
const Netflix = () => {
  const { user } = useSelector((state) => state);
  const { login } = useSelector((state) => state.user);

  useEffect(() => {}, [user]);
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="singleMovie" element={<SinglePage />}>
          <Route path=":id" element={<SinglePage />} />
        </Route>
        <Route path="user" element={<User />} />
        <Route path="auth" element={<Auth />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </MainLayout>
  );
};

export default Netflix;
