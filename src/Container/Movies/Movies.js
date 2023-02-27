import React, { useState, useEffect } from "react";

// UI & UX Imported func and component
import "./Movies.scss";
import Wrapper from "../../HOC/Wrapper";
import { useSelector } from "react-redux";
import Top from "../../Components/Top/Top";
import ListItems from "../../Components/ListItems/ListItems";

// UI & UX Imported func and component
const Movies = () => {
  const [list, setList] = useState([]);
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    setList([...movies]);
    console.log();
  }, [movies]);

  return (
    <Wrapper>
      <div className="movies">
        <Top />
        <div className="movies-cards">
          {list.map((movie) => (
            <ListItems movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Movies;
