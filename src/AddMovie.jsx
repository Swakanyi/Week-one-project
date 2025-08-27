import React from 'react'
import { useState } from 'react';

function AddMovie ({ onAdd }) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !year) return;

        const newMovie ={
            Title: title,
            Year: year,
            imdbID: Date.now().toString(), //setting up a unique id
            Type: "movie",
            Poster:""
        };

        onAdd(newMovie); //calling add movie's fxn
        setTitle("");
        setYear("");
};

    return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        className="add"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="add"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit" className='btn'>Add Movie</button>
    </form>
  )
}

export default AddMovie