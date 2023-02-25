import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateAccount, userAction } from "../../store/userSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useSelector((state) => state);
  const { token, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.login && token == null && error == null) {
      setUserName(user.info.name);
      setPassword(user.info.password);

      loginHanndler();
    }
    if (token != null && error == null) {
      dispatch(updateAccount(user));
      setLoader(false);
      navigate("/home");
      toast.success("User Successfuly Loged In", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [token]);
  const loginHanndler = async () => {
    setLoader(true);
    const res = await axios.get(`https://netflix-colon-b71d8-default-rtdb.firebaseio.com/${userName}.json`);

    setLoader(false);
    if (res.data == null) {
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
      dispatch(userAction.userNotFound());
      return;
    }
    dispatch(userAction.loginUser(res.data));
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
