import React, {useState, useEffect} from 'react'
import Loader from "../../../Loader/Loader";
import StarRating from "../../StarRating/StarRating";
import Logo from "../../../Header/Logo/Logo";

const key = `408487b8`;
const MovieDetail = ({selectId, onCloseMovie, onAddWatch, watched}) => {
    const [movie, setMovie] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [userRating, setUserRating] = useState("")
    const isWatched = watched.map(movie => movie.imdbID).includes(selectId);
    const watchedRating = watched.find(movie => movie.imdbID === selectId)?.userRating
    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating: imdb,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre
    } = movie

    useEffect(() => {
        document.addEventListener("keydown", callBack);

        function callBack(e) {
            if (e.code === "Escape") {
                onCloseMovie();
            }
        }

        return () => {
            document.removeEventListener("keydown", callBack);
        };
    }, [onCloseMovie]);


    useEffect(() => {
        if (!title) return
        document.title = `Movie |  ${title}`
    }, [title])

    useEffect(() => {
        try {
            async function fetchData() {
                setLoading(true)
                const dataMovies = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${selectId}`);

                if (!dataMovies.ok) {
                    throw new Error('Could not fetch data');
                }
                const moviesResponse = await dataMovies.json()
                setMovie(moviesResponse);
                setLoading(false);
            }

            fetchData();

        } catch (err) {
        }


        return (() => {
            document.title = "Pop Corn Movie App"
        })
    }, [selectId]);


    function handlerAddWatch() {
        const newWatchedMovie = {
            imdbID: selectId,
            poster,
            title,
            year,
            imdb: Number(imdb),
            runtime: Number(runtime.split(" ").at(0)),
            userRating,
        }
        onCloseMovie()
        onAddWatch(newWatchedMovie)
    }

    return (
        <div className="details">
            {
                isLoading ? <Loader/> :
                    <>
                        <header>
                            <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
                            <img src={poster} alt={`Poster of ${movie} movie`}/>
                            <div className="details-overview">
                                <h2>{title}</h2>
                                <p>{released} &bull; {runtime}</p>
                                <p>{genre}</p>
                                <p><span>🌟</span>{imdb} IMDb rating</p>
                            </div>
                        </header>
                        <section>
                            <div className="rating">
                                {!isWatched ? <><StarRating maxlength={10} size="20px" onSetRating={setUserRating}/>
                                        {userRating > 0 &&
                                            <button className="btn-add" onClick={handlerAddWatch}>+ Add to Watch List
                                            </button>}</>
                                    : <p>You already rate this movie with {watchedRating} 🌟</p>
                                }
                            </div>
                            <p><em>{plot}</em></p>
                            <p>Starring {actors}</p>
                            <p>Director {director}</p>
                        </section>
                    </>
            }
        </div>
    )
}

export default MovieDetail
