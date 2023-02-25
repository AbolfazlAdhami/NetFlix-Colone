import React, { useEffect, useState } from "react";
import Wrapper from "../../HOC/Wrapper";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import "./ListItems.scss";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateAccount, userAction } from "../../store/userSlice";

function ListItems({ movie }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [liked, setLiked] = useState(false);
  const { favoritList, login } = useSelector((state) => state.user);
  useEffect(() => {
    const liked = [...favoritList];
    const likeditem = liked.find((item) => item == movie.id);

    if (likeditem) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    dispatch(updateAccount(user));
  }, [favoritList]);
  const removeList = () => {
    dispatch(userAction.removeItem(movie.id));
  };

  const addtoFavorite = () => {
    if (!login) {
      navigate("/auth");
      toast.info("You should login Frist", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    dispatch(userAction.addToList(movie.id));
  };
  const showInfo = () => {
    setName("change");
  };
  const hideInfo = () => {
    setName("");
  };
  const naviPage = () => {
    navigate(`/singleMovie/${movie.id}`);
  };
  return (
    <Wrapper>
      <div className={`listItems ${name}`} onMouseEnter={showInfo} onMouseLeave={hideInfo}>
        <div className="like">
          <ShareIcon className="icon" />
          {!liked ? <FavoriteBorderIcon className="icon" onClick={addtoFavorite} /> : <FavoriteIcon className="icon liked" onClick={removeList} />}
        </div>
        <div className="poster">
          <img src={movie.poster} alt="" />
        </div>
        <div className="info">
          <h3 className="title">
            <span>Title: </span> {movie.title}
          </h3>
          <h3 className="year">
            <span>Year: </span> {movie.year}
          </h3>
          <h3>
            {" "}
            <span>Country: </span>
            {movie.country}
          </h3>
          <h3>
            <span>IMDB Rating: </span>
            {movie.imdb_rating}
          </h3>
          <h3>
            {" "}
            <span>Genres: </span>
            {movie.genres.map((item, index) => (
              <span className="gen" key={index}>
                {(index + 1) % 2 == 0 ? "," : null}
                {item}
              </span>
            ))}
          </h3>
        </div>
        <button className="more-btn" onClick={naviPage}>
          Show More
        </button>
      </div>
    </Wrapper>
  );
}

export default ListItems;
