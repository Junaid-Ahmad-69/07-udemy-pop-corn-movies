const average = (arr) => {
    if(!arr) return 0
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
}

const WatchSummary = ({watched}) => {
    const avgImdbRating = average(watched?.map((movie) => movie.imdb));
    const avgUserRating = average(watched?.map((movie) => movie.userRating));
    const avgRuntime = average(watched?.map((movie) => movie.runtime));
    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched?.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{(avgImdbRating)?.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    )
}

export default WatchSummary
