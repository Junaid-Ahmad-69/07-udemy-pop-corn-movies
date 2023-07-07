import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {useEffect, useState} from "react";
// import {tempMovieData, tempWatchedData} from "./utils/data";
// import TextHider from "./Components/TextHider/TextHider"
// import CurrencyChallenge from "./Components/CurrencyChallenge/CurrencyChallenge";
// import movie from "./Components/Main/ListBox/MovieList/Movie/Movie";
const key = `408487b8`;
export default function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectId, setSelectId] = useState(null);
    const [query, setQuery] = useState("inception");

    // const [watched, setWatched] = useState(() => {
    //     const storeValue = localStorage?.getItem("watchlist");
    //     return JSON.parse(storeValue)
    // });
    const [watched, setWatched] = useState([]);


    function handleSelectedId(id) {
        setSelectId(currentState => currentState === id ? null : id)
    }

    function handleCloseId() {
        setSelectId(null)
    }

    function handleAddWatchList(movie) {
        setWatched(  watched => [...watched, movie]);
    }

    function handleRemoveMovie(id) {
        setWatched(watched => watched.filter(movie => movie.imdbID !== id))
    }

    // useEffect(() => {
    //     localStorage?.setItem("watchlist", JSON.stringify(watched));
    // }, [watched]);


    useEffect(() => {
        const controller = new AbortController();

        async function fetchMovies() {
            try {
                setIsLoading(true)
                setError("")
                const data = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`, {signal: controller.signal});
                if (!data.ok) {
                    throw new Error("Something went wrong with Fetching");
                }
                const res = await data.json();
                if (res.Response === "False") {
                    throw new Error(`${query} Not Found`);
                }
                setMovies(res.Search);
                setError("")
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message)
                }
            } finally {
                setIsLoading(false)

            }
            if (!query.length) {
                setError("");
                setMovies([]);
            }
        }
        fetchMovies();
        return (() => {
            controller.abort()
        })
    }, [query]);
    return (
        <>
            <Header movies={movies} query={query} setQuery={setQuery}/>
            <Main movies={movies} loader={isLoading} error={error} selectId={selectId} onSelectId={handleSelectedId}
                  onCloseMovie={handleCloseId} onAddWatch={handleAddWatchList} watched={watched}
                  onRemoveMovie={handleRemoveMovie}/>
            {/*<CurrencyChallenge/>*/}
            {/*<StarRating maxlength="25" message={["Terrible", "Bad", "Ok", "Good", "Amazing"]}/>*/}
            {/*<Test/>*/}

            {/*<TextHider/>*/}
        </>
    );
}
// import StarRating from "./Components/Main/StarRating/StarRating";

// export function Test() {
//     const [movieRating, setMovieRating] = useState(0);
//     return (
//         <div>
//             <StarRating maxlength={10} color="blue" onAddRating={setMovieRating}/>
//             <p>This movie rating {movieRating} times</p>
//         </div>
//     )
// }