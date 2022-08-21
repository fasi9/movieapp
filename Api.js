import React from "react";

export const Content = React.createContext();

export function ContentProvider({ children }) {
  const MoviesData = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Game of thrones",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471818",
        name: "Action",
      },
      numberInStock: 6,
      dailyRentalRate: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z",
      liked: true,
    },

    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Stranger things",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471818",
        name: "Action",
      },
      numberInStock: 5,
      dailyRentalRate: 2.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "gotham",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471820",
        name: "Thriller",
      },
      numberInStock: 8,
      dailyRentalRate: 3.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      title: "vikings",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471814",
        name: "Comedy",
      },
      numberInStock: 7,
      dailyRentalRate: 3.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181a",
      title: "the last hope",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471814",
        name: "Comedy",
      },
      numberInStock: 7,
      dailyRentalRate: 3.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181b",
      title: "teenagers",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471814",
        name: "Comedy",
      },
      numberInStock: 7,
      dailyRentalRate: 3.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181e",
      title: "house of the dead",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471820",
        name: "Thriller",
      },
      numberInStock: 7,
      dailyRentalRate: 4.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181f",
      title: "money heist",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471820",
        name: "Thriller",
      },
      numberInStock: 4,
      dailyRentalRate: 3.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
      title: "The Avengers the last game",
      genre: {
        _id: "5b21ca3eeb7f6fbccd471818",
        name: "Action",
      },
      numberInStock: 7,
      dailyRentalRate: 3.5,
    },
  ];

  const [movie, setMovie] = React.useState(MoviesData);

  return (
    <Content.Provider value={[movie, setMovie, MoviesData]}>
      {children}
    </Content.Provider>
  );
}

export default Content;