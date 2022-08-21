import React from "react";
import Content from "./Api";

export default function Buttons() {
  const [movie, setMovie, MoviesData] = React.useContext(Content);

  const allMovies = () => setMovie(MoviesData);

  const actionMovies = () =>
    setMovie(MoviesData.filter((e) => e.genre.name === "Action"));

  const comedyMovies = () =>
    setMovie(MoviesData.filter((e) => e.genre.name === "Comedy"));

  const thrillerMovies = () =>
    setMovie(MoviesData.filter((e) => e.genre.name === "Thriller"));

  return (
    <>
      <div className="buttons col-2 active list-group">
        <button
          style={{ padding: "0.5rem" }}
          className="btn b btn-primary list-group-item "
          onClick={allMovies}
        >
          All Movies
        </button>
        <button
          style={{ padding: "0.5rem" }}
          className="btn b btn-primary list-group-item"
          onClick={actionMovies}
        >
          Action
        </button>
        <button
          style={{ padding: "0.5rem" }}
          className="btn b btn-primary list-group-item"
          onClick={comedyMovies}
        >
          Comedy
        </button>
        <button
          style={{ padding: "0.5rem" }}
          className="btn b btn-primary list-group-item"
          onClick={thrillerMovies}
        >
          Thriller
        </button>
      </div>
    </>
  );
}