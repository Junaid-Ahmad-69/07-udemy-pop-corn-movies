import Movie from "./Movie/Movie";

const MovieList = ({movies, onSelectId}) => {

    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} onSelectId={onSelectId} />
            ))}
        </ul>
    )
}

export default MovieList
