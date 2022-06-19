import "./Nav.css";
import Mag from "./Mag.png"
import Search from "./Search";


export const Nav = ({ setSearch, setMaxResults }) => {

    return (
        <header>
    
            <aside>
                <Search setSearch={setSearch} setMaxResults={setMaxResults} />
            </aside>
        </header>
    );

};

export default Nav;
