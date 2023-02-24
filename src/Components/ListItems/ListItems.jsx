import React, { useState } from "react";
import Wrapper from "../../HOC/Wrapper";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./ListItems.scss";
import { useNavigate } from "react-router";
function ListItems({ movie }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const showInfo = () => {
    setName("change");
  };
  const hideInfo = () => {
    setName("");
  };
  const naviPage = () => {
    console.log(movie);
    navigate(`/singleMovie/${movie.id}`);
  };
  return (
    <Wrapper>
      <div className={`listItems ${name}`} onMouseEnter={showInfo} onMouseLeave={hideInfo}>
        <div className="like">
          <ShareIcon className="icon" />
          <FavoriteBorderIcon className="icon" />
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
