import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addMovie, removeMovie } from "../../store/userSlice";
// UI & UX Imported func and component
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import "./Card.scss";
// UI & UX Imported func and component

const Card = ({ id }) => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const [liked, setliked] = useState(false);
  // Redux state
  const { user } = useSelector((state) => state);
  const { favoritList, login } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // Redux state

  const fetchMovie = async () => {
    const { status, data } = await axios.get(`https://moviesapi.ir/api/v1/movies/${id}`);

    if (status == 200 && data != null) {
      setMovie({ ...data });
      return movie;
    }
  };
  // Life Cyle of this components
  useEffect(() => {
    fetchMovie();
  }, [favoritList]);
  useEffect(() => {
    if (movie.id == id) {
      setliked(true);
    }
  }, [movie]);
  // Life Cyle of this components
  const addList = () => {
    if (user.login) {
      navigate("/auth");
      return;
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
    setliked(true);
  };
  const removeList = () => {
    dispatch(removeMovie(movie.id));
    setliked(false);

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

  return (
    <div className="card-movie">
      <div className="p-card">
        <img src={movie.poster} />
      </div>
      <div className="info-card">
        <div className="desc">
          <h3>
            <span>Title: </span> {movie.title}
          </h3>
          <h3>
            <span>Type: </span>
            {movie.type}
          </h3>
          <h3>
            <span>Year: </span>
            {movie.year}
          </h3>

          <h3>
            <span>Director: </span>
            {movie.director}
          </h3>
          <h3>
            <span>writer: </span>
            {movie.writer}{" "}
          </h3>
          <h3>
            <span>Actors: </span>
            {movie.actors}{" "}
          </h3>

          <h3>
            <span>IMDB Rating: </span>
            {movie.imdb_rating}{" "}
          </h3>
          <h3>
            <span>metascore: </span>
            {movie.metascore}{" "}
          </h3>
        </div>
        <div className="icon">
          <ShareIcon className="icons" />
          {!liked ? <FavoriteBorderIcon className="icons" onClick={addList} /> : <FavoriteIcon onClick={removeList} className="icons liked" />}
        </div>
      </div>
    </div>
  );
};

export default Card;
