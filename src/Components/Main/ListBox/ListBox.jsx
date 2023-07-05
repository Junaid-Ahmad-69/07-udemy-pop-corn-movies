import React, {useState} from 'react'
import MovieList from "./MovieList/MovieList";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";

const ListBox = ({movies, loader, error, onSelectId}) => {

    const [isOpen1, setIsOpen1] = useState(true);
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && loader && <Loader/>}
            {isOpen1 && !loader && !error && <MovieList movies={movies} onSelectId={onSelectId}/>}
            {isOpen1 && error && <Error message={error}/>}
        </div>
    )
}

export default ListBox
