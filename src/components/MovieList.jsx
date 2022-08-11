import React from 'react'

export const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, idx) => 
        <div>
            <img src={movie.Poster} alt="movie"></img>
        </div>)}
    </>
  )
}
