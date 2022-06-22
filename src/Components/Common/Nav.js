import React, { useState } from "react";
import "./Search.css";
import {Link} from "react-router-dom"
function Nav({ search, setSearch, submit, setSubmit }) {


    const handleChange = (event) => {
        setSearch(event.target.value)
        console.log(search)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submit ? setSubmit(false) : setSubmit(true)
    }
    return (
        <header className="gridNav Nav">
            <div className="navWrap">
                <div className="navBar__left">
                    <h5>
                        <Link to="/">Home</Link>
                    </h5>
                    <h5>
                        <Link to="/aboutpage">About</Link>
                    </h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <input value={search} onChange={handleChange} />
                    <button>Search</button>
                </form>
            </div>
        </header>
    );
}
export default Nav;
