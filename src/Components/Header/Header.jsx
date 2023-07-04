import './Header.css'
import Search from "./Search/Search";
import NumResult from "./NumResult/NumResult";
import Logo from "./Logo/Logo";

const Header = ({movies}) => {

    return (
        <nav className="nav-bar">
            <Logo/>
            <Search/>
            <NumResult movies={movies}/>

        </nav>
    )
}

export default Header
