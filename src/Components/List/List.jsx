import React, { useRef, useState, useEffect } from "react";
import Wrapper from "../../HOC/Wrapper";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./List.scss";
import ListItems from "../ListItems/ListItems";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const refList = useRef(null);
  const { status, moveies } = useSelector((state) => state.home);

  // Movment function
  const movemnetHandler = (direction) => {
    let postion = refList.current.getBoundingClientRect().x;

    if (direction == "back" && postion > -1500) {
      refList.current.style.transform = `translateX(${postion - 75}px)`;
    }
    if (direction == "forward" && postion < 0) {
      refList.current.style.transform = `translateX(${postion + 75}px)`;
    }
  };
  console.log();
  return (
    <Wrapper>
      <div className="list">
        <div className="listTitle">
          <span>The Most Wathced in this Week</span>{" "}
        </div>
        <div className="wrapper">
          <ArrowBackIosIcon className="sliderBTN back" onClick={() => movemnetHandler("back")} />
          <div className="container" ref={refList}>
            {moveies.map((movie, index) => {
              return <ListItems key={index} movie={movie} />;
            })}
          </div>
          <ArrowForwardIosIcon className="sliderBTN forward" onClick={() => movemnetHandler("forward")} />
        </div>
      </div>
    </Wrapper>
  );
};

export default List;
