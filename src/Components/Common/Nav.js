import "./Nav.css";
import Search from "./Search";
import sidebar from "../sidebar";
// import { useSpring, animated } from 'react-spring'

export const Nav = ({ setSearch, setMaxResults }) => {

    return (
        <header>
            <div>
                <Search setSearch={setSearch} setMaxResults={setMaxResults} />
                <img className="image" src="https://static.thenounproject.com/png/860372-200.png" alt="voice" width="50px"></img>

                
            </div>
        </header>
    );
};

export default Nav;
