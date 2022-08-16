import React, { useState, useEffect } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { MovieList } from './components/MovieList';
import { MovieListHeading } from './components/MovieListHeading';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=Kill&apikey=263d22d8";
    const response = await fetch(url); 
    const responseJson = await response.json(); 
    console.log(responseJson);
    //Thats the search-function - coming from the response
    setMovies(responseJson.Search)
  }
  useEffect(() => {
    getMovieRequest(); 
    
  
  }, [])
  

  return (
  
    <div className="container-fluid">
    <div className="row">
    <MovieListHeading heading='movies' />
    </div>
    <div className="row">
      <MovieList movies={movies} />
      
    </div>
      
    </div>
  );
}

export default App;
