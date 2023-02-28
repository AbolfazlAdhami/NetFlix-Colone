import React, { useEffect, useState } from "react";
import "./user.scss";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../Components/Card/Card";
import { redirect, useNavigate, useParams } from "react-router";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";

function User() {
  const { favoritList, login } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [likedList, setLikedList] = useState([]);
  const [load, setLoad] = useState(false);
  const { user } = useSelector((state) => state);

  // const dispatch = useDispatch();
  useEffect(() => {
    if (user.login) {
      // dispatch(updataUser(user));
    }
    const newList = favoritList == null ? [] : [...favoritList];
    setLikedList([...newList]);
  }, [user]);

  useEffect(() => {
    const newList = favoritList == null ? [] : [...favoritList];
    setLikedList([...newList]);
    setTimeout(() => {
      setLoad(true);
    }, 7000);

    return () => {
      if (!user.login) {
        navigate("/auth");
        toast.info("User Not Login", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };
  }, [0]);
   
  let content = null;
  if (likedList.length == 0) {
    content = <h3 className="not">This is NO Liked Movie in you List</h3>;
  } else {
    content = likedList.map((id) => {
      return <Card id={id} key={id} />;
    });
  }
  return (
    <div className="userPage">
      {!load ? (
        <div className="loader-user">
          <Loader />
        </div>
      ) : (
        content
      )}
    </div>
  );
}

export default User;
