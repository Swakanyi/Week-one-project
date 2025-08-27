import React from 'react'
import Movies from './Movies';

function MovieList({ movies }) {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found. Try searching</p>
      ) : (
        <ul className="movie-row">
          {movies.map((details) => (
            <Movies key={details.omdbID} movie={details} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default MovieList;
