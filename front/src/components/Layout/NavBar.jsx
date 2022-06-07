import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light _navbar container">
            <div className="container-fluid">
                <Link to="/">
                    <i className="fa-solid fa-clapperboard mx-1"/>
                    <a className="navbar-brand" href="/">  Movies App</a>
                </Link>
                <input type="text" className="form-control w-50 search" placeholder="Buscar..." />
                <div></div>
            </div>
        </nav>
    )
}
