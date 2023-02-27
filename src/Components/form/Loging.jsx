import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { loginUser, userNotFound } from "../../store/userSlice";

// UI & UX Imported func and component
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
// UI & UX Imported func and component

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const { status, create } = useSelector((state) => state.user);
  useEffect(() => {
    if (create) {
      setUserName(user.userName);
      setPassword(user.password);
      loginHanndler();
    }
  }, [status]);

  // Loging func
  const loginHanndler = async () => {
    setLoader(true);

    const { data, status } = await axios.get(`https://netflix-colon-b71d8-default-rtdb.firebaseio.com/:${userName}.json`);

    if (status == 200 && data != null) {
      dispatch(loginUser(data));
      toast.info("User login SuccessFully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/home");
      setUserName("");
      setPassword("");
      setLoader(false);

      return;
    }

    toast.warning("User Not Found", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(userNotFound());
    setUserName("");
    setPassword("");
    setLoader(false);
  };
  return (
    <div className="singIn">
      <div className="logo">
        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
      </div>
      <div className="input-boxes">
        <div className="input-box">
          <label htmlFor="user-name">User Name</label>
          <input type="text" id="user-name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <button className={`singin-btn `} onClick={() => loginHanndler()}>
        {loader ? <ThreeDots height="20" width="80" radius="9" color="#f5f6fa" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} /> : "Login User"}
      </button>
    </div>
  );
};

export default Login;
