import React from 'react'
import WatchedMovie from "./WatchedMovie/WatchedMovie";

const WatchList = ({watched, onRemoveMovie}) => {
    return (
        <ul className="list">
            {watched?.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID} onRemoveMovie={onRemoveMovie} />
            ))}
        </ul>
    )
}

export default WatchList
