const Info = ({ movie }) => {
  return (
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
    </div>
  );
};

export default Info;
