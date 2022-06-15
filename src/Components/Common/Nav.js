import "./Nav.css";
import Mag from "./Mag.png"

export const Nav = () => {


    return (
        <div>
            <img className="ytlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" />

            <label className="search">Search</label>

            <input className="searchBox" type="text" placeholder="search" />
            
            <button className="imgBut" ><img className="srcBut" src={Mag} /></button>
        </div>
    );
};

export default Nav;
