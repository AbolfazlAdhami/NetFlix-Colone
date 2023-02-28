import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Top.scss";
import SearchIcon from "@mui/icons-material/Search";
import Wrapper from "../../HOC/Wrapper";
import { getMovies } from "../../store/moviesSlice";

const Top = () => {
  const movies = useSelector((state) => state.movies);
  const [genre, setGener] = useState("");

  const { metaData } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const genreList = [...movies.genre];



  const changePage = (number) => {
   
    if (number != metaData.current_page) {
      let _genre = genre != "" ? genre : 1;
      if (_genre != 1) {
        const genreSelected = genreList.find((item) => item.name == _genre);
        _genre = genreSelected.id;
       
      }
      const data = {
        page: number,
        genre: _genre,
      };
      
      dispatch(getMovies(data));
    }
  };
  const chnageGener = (name) => {
    setGener(name);
    const genreSelected = genreList.find((item) => item.name == name);
    if (genreSelected) {
      const data = {
        genre: genreSelected.id,
        page: 1,
      };
      dispatch(getMovies(data));
    }
  };
  return (
    <Wrapper>
      <div className="top">
        <div className="genre">
          <label htmlFor="genre-name">Gener: </label>
          <select id="genre-name" className="genre-name" value={genre} onChange={(e) => chnageGener(e.target.value)}>
            <option className="option"> Please choose an Genre </option>
            {genreList.map(({ id, name }) => (
              <option value={name} key={id} className="option">
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="search">
          <input type="search" className="search-box" placeholder="Search Name of Movie You Looking For!!!" />
          <button className="search-btn">
            <SearchIcon className="search-btn" />
          </button>
        </div>
      </div>
      <div className="paggination">
        {Array(metaData.page_count)
          .fill("")
          .map((item, index) => (
            <button className={`page ${metaData.current_page == index + 1 ? "actived" : null}`} key={index} onClick={() => changePage(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    </Wrapper>
  );
};

export default Top;
