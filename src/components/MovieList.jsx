import React from 'react'

export const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, idx) => (
          <div className='d-flex justify-content-start m-3'>
            <img src={movie.Poster} alt="movie"></img>
            <div className='overlay d-flex align-items-center justify-content-center'>

            </div>
        </div>))}
        
    </>
  )
}
