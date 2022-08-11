import './App.css';
import React, { useState, useEffect } from 'react';  
import { MovieList } from './components/MovieList';
import { MovieListHeading } from './components/MovieListHeading';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=Avengers&apikey=263d22d8";
    const response = await fetch(url); 
    const responseJson = await response.json(); 
    console.log(responseJson);
    setMovies(responseJson.Search)
  }
  useEffect(() => {
    getMovieRequest(); 
    
  
  }, [])
  

  return (
  
    <div className="App">
    <div className="row">
    <MovieListHeading heading='movies' />
    </div>
    <div className="row">
      <MovieList movies = {movies} />
      
    </div>
      
    </div>
  );
}

export default App;
