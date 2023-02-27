import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "../../Components/form/Loging";
import Singin from "../../Components/form/Singin";
// UI & UX Imported func and component
import { toast } from "react-toastify";
import "./Auth.scss";
// UI & UX Imported func and component

function Auth() {
  const dispatch = useDispatch();
  const btn_switcher = useRef(null);
  const [form, setform] = useState("singin");
  const switcherHandler = (name) => {
    setform(name);
  };
  const { user } = useSelector((state) => state);
  const { status, create } = useSelector((state) => state.user);

  useEffect(() => {
    if (create) {
      switcherHandler("login");
    }
  }, [create]);
  useEffect(() => {}, [user]);
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
