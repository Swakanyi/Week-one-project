import React from "react";
import Movies from "./Movies";

function MovieList({ movies, onDelete }) {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found. Try searching</p>
      ) : (
        <ul className="movie-row">
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} className="poster" />
              <h3>
                {movie.Title} ({movie.Year})
              </h3>
              <button onClick={() => onDelete(movie.imdbID)} className="btn-del">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
