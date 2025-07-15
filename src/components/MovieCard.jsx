

import React from "react";
import "../App.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      <div className="movie-title">{movie.title}</div>
      <div className="movie-description">{movie.description}</div>
      <div className="movie-rating">⭐ {movie.rating}</div>
    </div>
  );
}

export default MovieCard;
