import Movie from "./Movie/Movie";

const MovieList = ({movies}) => {

    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie movie={movie}/>
            ))}
        </ul>
    )
}

export default MovieList
