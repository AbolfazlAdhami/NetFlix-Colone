import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../HOC/Wrapper";
import Info from "../../Components/InfoCard/Info";
import axios from "axios";
import { addMovie, removeMovie } from "../../store/userSlice";
// UI & UX Imported func and component
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import "./Single.scss";
import LoaderSingle from "../../Components/Loader/LoaderSingle";
// UI & UX Imported func and component

function SinglePage() {
  const [liked, setLiked] = useState(false);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  // Fetch data by uniqe id of movie pass by Useparams
  const fetchData = async () => {
    const { data, status } = await axios.get(`https://moviesapi.ir/api/v1/movies/${id}`);

    if (status == 200) {
      setMovie({ ...data });
      setLoading(true);
    }
  };
  useEffect(() => {
    if (user.login) {
      const likedList = [...user.favoritList];
      const finedId = likedList.find((item) => id == item);
      if (finedId != null) setLiked(true);
    }
  }, [user]);
  useEffect(() => {
    fetchData();
  }, [id]);

  const addList = () => {
    dispatch(addMovie(movie.id));
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
    setLiked(true);
  };
  const removeList = () => {
    dispatch(removeMovie(movie.id));
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
    setLiked(false);
  };
  const Content = (
    <React.Fragment>
      <div className="info">
        <Info movie={movie} />
        <div className="poster">
          <div className="btn-icons">{liked ? <FavoriteIcon className="icon liked" onClick={removeList} /> : <FavoriteBorderIcon className="icon" onClick={addList} />}</div>
          <img src={movie.poster} />
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <Wrapper>
      <div className="single">{loading ? Content : <LoaderSingle />}</div>
    </Wrapper>
  );
}

export default SinglePage;
