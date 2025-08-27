import React from 'react'

function Movies({ movie }) {
  return (
    <div className="Movies">
      <li>
      <img className="poster" src={movie.Poster} alt={movie.Title} />
      <div>
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
      </div>
    </li>
    </div>

  )
}

export default Movies;
