import React from 'react'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light _navbar">
            <div className="container-fluid">
                <div>
                    <i className="fa-solid fa-clapperboard mx-1"/>
                    <a className="navbar-brand" href="/">  Movies App</a>
                </div>
                <input type="text" className="form-control w-50 search" placeholder="Buscar..." />
                <div></div>
            </div>
        </nav>
    )
}
