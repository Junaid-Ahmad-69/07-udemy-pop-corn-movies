import './Header.css'
import Search from "./Search/Search";
import NumResult from "./NumResult/NumResult";
import Logo from "./Logo/Logo";

const Header = ({movies, query, setQuery}) => {

    return (
        <nav className="nav-bar">
            <Logo/>
            <Search query={query} setQuery={setQuery}/>
            <NumResult movies={movies}/>

        </nav>
    )
}

export default Header
