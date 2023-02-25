import React from "react";
import "./Auth.scss";
import { useState } from "react";
import Singin from "../../Components/form/Singin";
import Login from "../../Components/form/Loging";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { createAccount } from "../../store/userSlice";
import { toast } from "react-toastify";
function Auth() {
  const dispatch = useDispatch();
  const btn_switcher = useRef(null);
  const [form, setform] = useState("singin");
  const switcherHandler = (name) => {
    setform(name);
  };
  const { user } = useSelector((state) => state);
  const { login, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (login) {
      switcherHandler("login");
      dispatch(createAccount(user));
    } else if (error == "warning") {
      switcherHandler("singin");
      toast.info("You already have any account", {
        position: "center-top",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [user]);

  return (
    <div className="auth-container">
      <div className="form">
        <div className="btn-swicher">
          <button className={`btn ${form == "singin" ? `active` : null}`} onClick={() => switcherHandler("singin")}>
            Singin
          </button>
          <button className={`btn ${form == "login" ? `active` : null}`} ref={btn_switcher} onClick={() => switcherHandler("login")}>
            Login
          </button>
        </div>
        <div className="form-box">{form == "singin" ? <Singin /> : <Login />}</div>
      </div>
    </div>
  );
}

export default Auth;
