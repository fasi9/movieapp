import React from "react";
import Tablegrid from "react-bootstrap/Table";
import "../App.css";
import Content from "./Api";

function Table() {
  const [movie, setMovie] = React.useContext(Content);
  console.log("start", movie);

  const [counter, setCounter] = React.useState(movie.length - 1);
  const [page, setPage] = React.useState(4);

  const deleteMovie = (value) => {
    setMovie(movie.filter((e) => e._id !== value));
    setCounter(counter - 1);
  };

  // const pageOne = () => {
  //   const startIndex = 0;
  // };

  const sortOrder = () => {
    const tempMovies = [...movie];
    console.log(tempMovies, movie);
    tempMovies.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    setMovie(tempMovies);
  };

  const genreSort = () => {
    const tempMovies = [...movie];
    console.log(tempMovies, movie);
    tempMovies.sort((a, b) => {
      if (a.genre.name < b.genre.name) return -1;
      if (a.genre.name > b.genre.name) return 1;
      return 0;
    });
    setMovie(tempMovies);
  };

  const stockSort = () => {
    const tempMovies = [...movie];
    console.log(tempMovies, movie);
    tempMovies.sort((a, b) => {
      if (a.numberInStock < b.numberInStock) return -1;
      if (a.numberInStock > b.numberInStock) return 1;
      return 0;
    });
    setMovie(tempMovies);
  };

  const rateSort = () => {
    const tempMovies = [...movie];
    console.log(tempMovies, movie);
    tempMovies.sort((a, b) => {
      if (a.dailyRentalRate < b.dailyRentalRate) return -1;
      if (a.dailyRentalRate > b.dailyRentalRate) return 1;
      return 0;
    });
    setMovie(tempMovies);
  };

  return (
    <>
      <div className="table">
        <div>
          <p>Showing {counter} movies in the database.</p>
        </div>
        <Tablegrid
          style={{ width: "80%" }}
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th onClick={() => sortOrder()}>Title</th>
              <th onClick={() => genreSort()}>Genre</th>
              <th onClick={() => stockSort()}>Stock</th>
              <th onClick={() => rateSort()}>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movie.map((Element) => {
              return (
                <tr>
                  <td>{Element.title}</td>
                  <td>{Element.genre.name}</td>
                  <td>{Element.numberInStock}</td>
                  <td>{Element.dailyRentalRate}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteMovie(Element._id)}
                      className="btn btn-danger"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Tablegrid>
      </div>

      <div className="nextpage active ">
        <div className="btn-group">
          <button type="button" className="btn btn-primary">
            1
          </button>
          <button type="button" className="btn btn-primary">
            2
          </button>
          <button type="button" className="btn btn-primary">
            3
          </button>
        </div>
      </div>
    </>
  );
}

export default Table;