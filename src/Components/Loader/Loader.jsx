import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <ThreeDots height="200" width="200" radius="9" color="#ea2027" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
    </div>
  );
}

export default Loader;
