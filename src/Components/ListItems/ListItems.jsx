import React, { useEffect, useState } from "react";
import Wrapper from "../../HOC/Wrapper";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/userSlice";
// UI & UX Imported func and component

import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import "./ListItems.scss";
// UI & UX Imported func and component

function ListItems({ movie }) {
  const navigate = useNavigate();
  // Redux state and dispatch
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { favoritList, login } = useSelector((state) => state.user);
  // Reducers
  // Global state in this page
  const [name, setName] = useState("");
  const [liked, setLiked] = useState(false);
  // check for liked movie and change icon color and update list

  useEffect(() => {
    
    const likedList = favoritList == null ? [] : [...favoritList];
    const likedMovie = likedList.findIndex((item) => item == movie.id);
    if (likedMovie != -1) {
      setLiked(true);
    }
  }, [user]);
  // remove id of movie to list
  const removeList = () => {
    dispatch(removeMovie(movie.id));
    setLiked(false);
    toast.info(`${movie.title} Remove to Your List`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // Add id of movie to list if user loged ing
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
    dispatch(addMovie(movie.id));
    toast.info(`${movie.title} Add to Your List`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // Show info by change className Style
  const showInfo = () => {
    setName("change");
  };
  // Show info by change className Style

  const hideInfo = () => {
    setName("");
  };
  // navigate to single page and send id of movie
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
