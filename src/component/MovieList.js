import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ data }) {
  return (
    <div className="row">
      {data.map((movie) => {
        return (
          <div>
            <MovieCard
              title={movie.Title}
              type={movie.Type}
              posterUrl={movie.Poster}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
