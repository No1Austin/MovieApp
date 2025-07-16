import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import movieData from "./data";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: ""
  });

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.rating && newMovie.trailer) {
      setMovies([...movies, { ...newMovie, rating: parseFloat(newMovie.rating) }]);
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
        trailer: ""
      });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseFloat(ratingFilter || 0)
  );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>🎬 My Movie App</h1>
              <Filter
                titleFilter={titleFilter}
                ratingFilter={ratingFilter}
                setTitleFilter={setTitleFilter}
                setRatingFilter={setRatingFilter}
              />

              <div className="add-movie-form">
                <h2>Add a New Movie</h2>
                <input
                  placeholder="Title"
                  value={newMovie.title}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, title: e.target.value })
                  }
                />
                <input
                  placeholder="Description"
                  value={newMovie.description}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, description: e.target.value })
                  }
                />
                <input
                  placeholder="Poster URL"
                  value={newMovie.posterURL}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, posterURL: e.target.value })
                  }
                />
                <input
                  placeholder="Trailer Embed Link"
                  value={newMovie.trailer}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, trailer: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Rating"
                  value={newMovie.rating}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, rating: e.target.value })
                  }
                />
                <button onClick={handleAddMovie}>Add Movie</button>
              </div>

              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movie/:title" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
