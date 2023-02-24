import React, { Component } from "react";
import MainLayout from "./Container/Layout/MainLayout";
import Home from "./Container/Home/Home";
import { Route, Routes } from "react-router";
import SinglePage from "./Container/SinglePage/SinglePage";

class Netflix extends Component {
  state = {};

  render() {
    return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="singleMovie" element={<SinglePage />}>
            <Route path=":id" element={<SinglePage />} />
          </Route>
        </Routes>
      </MainLayout>
    );
  }
}

export default Netflix;
