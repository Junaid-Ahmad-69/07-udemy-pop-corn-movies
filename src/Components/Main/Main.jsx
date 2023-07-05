import ListBox from "./ListBox/ListBox";
import WatchedBox from "./WatchedBox/WatchedBox";

const Main = ({movies, loader, error, selectId , onSelectId, onCloseMovie, onAddWatch, watched ,onRemoveMovie}) => {

    return (
        <main className="main">
            <ListBox movies={movies} loader={loader} error={error} onSelectId={onSelectId}  />
            <WatchedBox selectId={selectId} onCloseMovie={onCloseMovie} onAddWatch={onAddWatch} watched={watched} onRemoveMovie={onRemoveMovie} />

        </main>
    )
}

export default Main
