import React, { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import "../App.css";
import Modal from "react-modal";
import { getMoviesDetailBySearchTerm } from "./Utils";

function MovieCard({ title, type, posterUrl }) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [show, setShow] = useState(false);

  function onClose() {
    setShow(!show);
  }

  useEffect(() => {
    const getMovie = async () => {
      let data = await getMoviesDetailBySearchTerm(title);
      setMovieDetails(data);
    };
    getMovie();
  }, []);

  return (
    <div style={{ margin: "10px" }} onClick={onClose}>
      <img
        src={posterUrl}
        alt="logo"
        // style={{ cursor: "pointer" }}
      />
      <h4> {title}</h4>
      <span
        style={{
          border: "2px solid black",
          backgroundColor: "red",
          display: "inline-block",
        }}
      >
        {type}
      </span>

      <Modal isOpen={show} onRequestClose={onClose}>
        <MovieDetails data={movieDetails} />
        <button onClick={onClose}>Close</button>
      </Modal>
    </div>
  );
}

export default MovieCard;
