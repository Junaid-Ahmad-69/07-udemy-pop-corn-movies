import React, {useState} from 'react'
import {tempWatchedData} from "../../../utils/data";
import WatchSummary from "./WatchSummary/WatchSummary";
import WatchList from "./WatchList/WatchList";
import MoviesDetails from "./MovieDetail/MovieDetail";


const WatchedBox = ({selectId, onCloseMovie, onAddWatch, watched, onRemoveMovie}) => {
    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && selectId ?
                <MoviesDetails selectId={selectId} onCloseMovie={onCloseMovie} onAddWatch={onAddWatch} watched={watched}/> : <>
                    <WatchSummary watched={watched}/>
                    <WatchList watched={watched} onRemoveMovie={onRemoveMovie}/>
                </>}
        </div>
    )
}

export default WatchedBox
