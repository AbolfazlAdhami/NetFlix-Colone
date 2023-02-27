
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const LoaderSingle = () => (
  <ThreeCircles
    height="200"
    width="200"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass="loader"
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor="#ea2027"
    innerCircleColor="#ea2027"
    middleCircleColor="#f5f6fa"
  />
);
export default LoaderSingle;
