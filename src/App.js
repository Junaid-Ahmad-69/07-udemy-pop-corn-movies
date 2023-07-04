import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {useState} from "react";
import {tempMovieData} from "./utils/data";
import TextHider from "./Components/TextHider/TextHider"
import StarRating from "./Components/Main/StarRating/StarRating";

// export function Test() {
//     const [movieRating, setMovieRating] = useState(0);
//     return (
//         <div>
//             <StarRating maxlength={10} color="blue" onAddRating={setMovieRating}/>
//             <p>This movie rating {movieRating} times</p>
//         </div>
//     )
// }

export default function App() {
    const [movies, setMovies] = useState(tempMovieData);

    return (
        <>
            {/*<Header movies={movies}/>*/}
            {/*<Main movies={movies}/>*/}
            {/*<StarRating maxlength="25" message={["Terrible", "Bad", "Ok", "Good", "Amazing"]}/>*/}
            {/*<Test/>*/}

            <TextHider/>
        </>
    );
}
