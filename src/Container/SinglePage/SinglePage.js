import React, { useState } from "react";
import { useParams } from "react-router";
import "./Single.scss";
import Wrapper from "../../HOC/Wrapper";
import { useEffect } from "react";
import axios from "axios";

import { ThreeCircles } from "react-loader-spinner";
function SinglePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const { data, status } = await axios.get(`https://moviesapi.ir/api/v1/movies/${id}`);
    if (status == 200) {
      setMovie({ ...data });
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const Loadder = (
    <ThreeCircles
      height="200"
      width="200"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#ea2027"
      innerCircleColor="#ea2027"
      middleCircleColor="#f5f6fa"
    />
  );

  const Content = (
    <React.Fragment>
      <div className="info">
        <div className="desc">
          <h3>
            <span>Title: </span> {movie.title}
          </h3>
          <h3>
            <span>Type: </span> {movie.type}
          </h3>
          <h3>
            <span>Year: </span> {movie.year}
          </h3>
          <h3>
            <span>Released Date: </span> {movie.released}
          </h3>
          <h3>
            <span>Runtime: </span> {movie.runtime}
          </h3>
          <h3>
            <span>Director: </span> {movie.director}
          </h3>
          <h3>
            <span>writer: </span> {movie.writer}{" "}
          </h3>
          <h3>
            <span>Actors: </span> {movie.actors}{" "}
          </h3>
          <h3>
            <span>Awards: </span> {movie.awards}{" "}
          </h3>
          <h3>
            <span>IMDB Rating: </span> {movie.imdb_rating}{" "}
          </h3>
          <h3>
            <span>metascore: </span> {movie.metascore}{" "}
          </h3>

          <h3>
            <span>synopsis: </span> {movie.plot}{" "}
          </h3>
          <button className="btn-add">Add to Your List</button>
        </div>
        <div className="poster">
          <img src={movie.poster} />
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <Wrapper>
      <div className="single">{loading ? Content : Loadder}</div>
    </Wrapper>
  );
}

export default SinglePage;
