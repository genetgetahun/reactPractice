import React from "react";
// import { PropTypes } from 'prop-types';
import "./movieDetail.css";
function MovieDetails({ data }) {
  return (
    <div style={{ display: "block" }}>
      <div>
        <img src={data.Poster} alt="logo" /> <br />
      </div>
      <div style={{ padding: "5px 10px" }}>
        <div style={{ display: "flex" }}>
          <p className="title">
            <strong>{data.Title}</strong>{" "}
          </p>
          <p style={{ padding: "5px 10px" }}>{data.imdbRating} </p>
        </div>
        <p>{data.Rated}</p> <br />
        {data.Runtime} <br />
        <button>{data.Genre}</button>
        <br />
        <p className="Title">
          <strong>Plot</strong>
          <br />
          {data.Plot}
        </p>
        <p>
          <strong>Actors</strong>
          <br />
          {data.Actors}
          <br />
        </p>
        {data.Rating}
        <br />
        <p>
          <strong>Writter</strong>
          <br />
          {data.Writer}
        </p>
        <br />
        <p>
          <strong>Language</strong> <br />
          {data.Language}
        </p>
      </div>
    </div>
  );
  // MovieDetails.propTypes = {
  //   name: PropTypes.string,
  //   age: PropTypes.number
  // };
}

export default MovieDetails;
