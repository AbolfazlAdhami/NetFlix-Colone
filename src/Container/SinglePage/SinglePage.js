import React, { useState, useEffect } from "react";
import Wrapper from "../../HOC/Wrapper";
import { useParams } from "react-router";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
import Info from "../../Components/InfoCard/Info";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Single.scss";

function SinglePage() {
  const { id } = useParams();
  // const 
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
        <Info movie={movie} />
        <div className="poster">
          <div className="btn-icons">
            <FavoriteBorderIcon />
          </div>
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
