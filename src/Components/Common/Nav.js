import React, { useState } from "react";
import Mag from "./Mag.png"
import "./Search.css";
import { Link } from "react-router-dom"

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
                <form onSubmit={handleSubmit}>
                <input value={search} onChange={handleChange}/>                 
                <button>Search</button>
                </form>
            </div>
        </header>
    );
}
export default Nav;
