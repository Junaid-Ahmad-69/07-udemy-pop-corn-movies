import ListBox from "./ListBox/ListBox";
import WatchedBox from "./WatchedBox/WatchedBox";


const Main = ({movies}) => {

    return (
        <main className="main">
            <ListBox movies={movies}/>
            <WatchedBox/>

        </main>
    )
}

export default Main
