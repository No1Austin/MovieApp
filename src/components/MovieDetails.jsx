import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movieData from "../data";

function MovieDetails() {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movieData.find((m) => m.title === title);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate("/")}>⬅ Back to Home</button>
    </div>
  );
}

export default MovieDetails;
