import { useState } from 'react'
import './App.css'
import Search from './Search'
import MovieList from './MovieList'
import spiderManImage from './assets/3f360f69-369b-41a1-8183-c32a50804149.jpeg'
import batManImage from '.assets/Recreation of the batman poster.jpeg'
import inception from '.assets/ce83dd72-e5de-434c-9f45-90a7103bc4cb.jpeg'

const sampleMovies = [
  {
    Title: "Spider-Man: No Way Home",
    Year: "2021",
    imdbID: "tt10872600",
    Type: "movie",
    Poster: spiderManImage
  },
  {
    Title: "The Batman",
    Year: "2022",
    imdbID: "tt1877830",
    Type: "movie",
    Poster: batManImage
  },
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "tt1375666",
    Type: "movie",
    Poster: inception
  }
];


function App() {
  const [movies, setMovies] = useState(sampleMovies);

  // Fetvhing from API
  const fetchMovies = async (query) => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=168f6399`
      );

      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies(sampleMovies);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
        setMovies(sampleMovies)
    }
  };

  return (
    <div className="App">
      <h1>BingeBox</h1>
      <Search onSearch={fetchMovies} />
      <MovieList movies={movies} />
      
    </div>
  );
}

export default App;
