// import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./component/MovieCard";
import React, { useEffect, useState } from "react";
import { getMoviesBySearchTerm } from "./component/Utils";
import MovieDetails from "./component/MovieDetails";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";
import Modal from "react-modal";
import Pagination from "./component/Pagination";
function App() {
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [movies, setmovies] = useState([]);

  function updateMovie(searchTerm) {
    if (!searchTerm) searchTerm = "Guardians of the Galaxy";
    setisLoading(true);
    getMoviesBySearchTerm(searchTerm)
      .then((data) => {
        setmovies(data.Search);
        seterror(null);
        setisLoading(false);
      })
      .catch((error) => {
        setisLoading(false);
        seterror(error.message);
        setmovies([]);
      });
  }
  useEffect(() => {
    updateMovie();
  }, []);

  const handleChangeValue = (event) => {
    event.preventDefault();
    updateMovie(event.target[0].value);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-md-center align-items-center vh-100">
        <h1>Loading...</h1>
      </div>
    );
  } else if (!isLoading && error) {
    return (
      <>
        <h2>{error}</h2>
      </>
    );
  } else if (!isLoading && movies.length > 0) {
    return (
      <div>
        {/* <SearchBar value={searchterm} onChangeValue={handleChangeValue} /> */}
        <SearchBar onChangeValue={handleChangeValue} />
        <MovieList data={movies} />
        {/* <MovieCard /> */}
        {/* <Pagination /> */}
      </div>
    );
  } else {
    return (
      <>
        <p> No data to show</p>
      </>
    );
  }
}

export default App;
