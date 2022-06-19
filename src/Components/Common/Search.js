import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mag from "./Mag.png"
import "./Search.css";
function Search({ setSearch, setMaxResult }) {
    const [inputSearch, setInputSearch] = useState("");
    const [inputMaxSearch, setInputMaxSearch] = useState(8);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(inputSearch);
        setMaxResult(inputMaxSearch);
        setInputMaxSearch(10);
        setInputSearch("");
        navigate("/videos");
    };

    return (
        <header className="gridNav Nav">
            <div className="navWrap">
                <form onSubmit={handleSubmit}>
                    <button className='logo'><img className="ytlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" />
                    </button>
                    <input className="sf" onChange={(event) => setInputSearch(event.target.value)} value={inputSearch} type="text" placeholder="Search" />

                    <select className="select" onChange={(event) => setMaxResult(event.target.value)}>
                        <option selected value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                    </select>
                    <button className="imgBut" type="submit"  ><img className="mag" src={Mag} /></button>
                </form>
            </div>
        </header>
    );
}
export default Search;