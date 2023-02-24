import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { singInUser } from "../../store/userSlice";
import { object, string } from "yup";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

import "./Singin.scss";
const Singin = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const validation = async (obj) => {
    let userSchema = object({
      name: string().required("This field must be filled"),
      email: string().email("Invalid Email Format ").required("This field must be filled"),
      password: string().required("This field must be filled").min(4, "Password must be at least 4 characters"),
    });
    try {
      await userSchema.validate(obj, { abortEarly: false });
    } catch (error) {
      console.log(error.errors);
      setLoader(false);
      return error.errors;
    }
  };

  const regesterUser = async () => {
    setLoader(true);
    const user = {
      name: userName,
      email: email,
      password: password,
    };

    const validate = await validation(user);

    if (validate == null) {
      dispatch(singInUser(user));
      setEmail("");
      setUserName("");
      setPassword("");
      toast.success("User Successfuly Regestered", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoader(true);
      return;
    }
    validate.map((m) => {
      toast.error(m, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  return (
    <div className="singIn">
      <div className="logo">
        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
      </div>
      <div className="input-boxes">
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-box">
          <label htmlFor="user-name">User Name</label>
          <input type="text" id="user-name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <button className={`singin-btn `} onClick={regesterUser}>
        {loader ? <ThreeDots height="30" width="80" radius="9" color="#f5f6fa" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} /> : "Regester User"}
      </button>
    </div>
  );
};

export default Singin;
