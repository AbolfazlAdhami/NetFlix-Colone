import React from "react";
import Wrapper from "../../HOC/Wrapper";
import NavBar from "../../Components/Navbar/Navbar";
import "./MainLayout.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MainLayout(props) {
  return (
    <Wrapper>
      <div className="layout">
        <NavBar />
        {props.children}
      </div>
      <ToastContainer
        position="top-right"
        className="toast-container"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Wrapper>
  );
}

export default MainLayout;
