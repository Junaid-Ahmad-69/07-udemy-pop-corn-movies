import React from 'react'

const WatchedMovie = ({movie, onRemoveMovie}) => {
  return (
        <li key={movie.imdbID}>
            <img src={movie.poster} alt={`${movie.title} poster`}/>
            <h3>{movie.title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdb}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
                <button onClick={()=>onRemoveMovie(movie.imdbID)} className="btn-delete">X</button>
            </div>
        </li>
  )
}

export default WatchedMovie
