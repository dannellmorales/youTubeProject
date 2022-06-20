import "./Nav.css";
import Search from "./Search";


export const Nav = ({ setSearch, setMaxResults }) => {

    return (
        <header>
            <div>
                <Search setSearch={setSearch} setMaxResults={setMaxResults} />
            </div>
        </header>
    );

};

export default Nav;
