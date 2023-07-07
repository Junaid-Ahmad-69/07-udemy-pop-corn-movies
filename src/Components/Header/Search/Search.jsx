import {useRef, useEffect} from "react";

const Search = ({query, setQuery}) => {
    const inputElement = useRef(null);
    useEffect(() => {
        document.addEventListener('keydown', callback);

        function callback(e) {
            if (document.activeElement === inputElement.current)  return
            if (e.code === "Enter") {
                inputElement.current.focus();
                setQuery("")
            }
        }

        return (() => {
            document.removeEventListener('keydown', callback);
        })
    }, [setQuery]);

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            ref={inputElement}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default Search
