import React, { useState } from 'react'
import { Link, useNavigate  } from "react-router-dom";

export const NavBar = () => {

    const history = useNavigate();
    const [search, setSearch] = useState()
    
    const handelSearch = () => {
        if (search) {
            history(`/movie/search/${search}`, { replace: true });
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light _navbar container">
            <div className="container-fluid">
                <Link to="/">
                    <i className="fa-solid fa-clapperboard mx-1"/>
                    <a className="navbar-brand" href="/">  Movies App</a>
                </Link>
                <input 
                    type="text" 
                    className="form-control w-50 search" 
                    placeholder="Buscar..." 
                    value={search}
                    onChange={({target})=>setSearch(target.value)}
                    onKeyUp={(e)=>(e.key === 'Enter') && handelSearch()}
                />
                <div></div>
            </div>
        </nav>
    )
}
