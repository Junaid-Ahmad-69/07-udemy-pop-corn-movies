import React, {useState} from 'react'
import {tempWatchedData} from "../../../utils/data";
import WatchSummary from "./WatchSummary/WatchSummary";
import WatchList from "./WatchList/WatchList";


const WatchedBox = () => {
    const [watched, setWatched] = useState(tempWatchedData);
    const [isOpen2, setIsOpen2] = useState(true);


    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                    <WatchSummary watched={watched} />
                  <WatchList watched={watched}/>
                </>
            )}
        </div>
    )
}

export default WatchedBox
