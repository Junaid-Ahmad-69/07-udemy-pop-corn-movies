const Movie = ({movie, onSelectId}) => {
  return (
      <li onClick={()=>onSelectId(movie.imdbID)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`}/>
          <h3>{movie.Title}</h3>
          <div>
              <p>
                  <span>🗓</span>
                  <span>{movie.Year}</span>
              </p>
          </div>
      </li>
  )
}

export default Movie
