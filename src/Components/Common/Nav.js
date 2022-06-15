import "./Nav.css";
import Mag from "./Mag.png"

export const Nav = () => {


    return (
        <nav class="navbar navbar-inverse navbar-fixed-top">
             <button className='logoBut'><img className="ytlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" />
             </button>
             
            <label className="search">Search</label>

            <input className="sb" type="text" placeholder="search" />

            <button className="imgBut" ><img className="mag" src={Mag} /></button>
         </nav>







    );

};

export default Nav;
