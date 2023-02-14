import React, { useRef } from "react";
import Wrapper from "../../HOC/Wrapper";
import Icon from "@mdi/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./List.scss";
import ListItems from "../ListItems/ListItems";
const List = () => {
  const refList = useRef(null);

  const movemnetHandler = (direction) => {
    let postion = refList.current.getBoundingClientRect().x;

    if (direction == "back" && postion > -2550) {
      refList.current.style.transform = `translateX(${postion - 75}px)`;
    } else if (direction == "forward" && postion < 0) {
      refList.current.style.transform = `translateX(${postion + 75}px)`;
    }
  };

  return (
    <Wrapper>
      <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
          <ArrowBackIosIcon className="sliderBTN back" onClick={() => movemnetHandler("back")} />
          <div className="container" ref={refList}>
            {Array(15)
              .fill("")
              .map((x, index) => (
                <ListItems key={index} index={index} />
              ))}
          </div>
          <ArrowForwardIosIcon className="sliderBTN forward" onClick={() => movemnetHandler("forward")} />
        </div>
      </div>
    </Wrapper>
  );
};

export default List;
