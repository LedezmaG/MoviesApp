import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesHome } from '../components/Movies/MoviesHome'
import { MoviesDetails } from '../components/Movies/MoviesDetails'
import { Page404 } from '../components/Pages/Page404'
import { NavBar } from '../components/Layout/NavBar';

export const AppRouter = () => {

    return (
        <Router>
            <div className='main conteiner'>
                <div className='header'>
                    <NavBar />
                </div>
                <div className='content'>
                    <Routes>
                        <Route 
                            path="/" 
                            element={<MoviesHome />} 
                        />
                        <Route 
                            path="/movie/:id" 
                            element={<MoviesDetails />} 
                        />
                        <Route 
                            path="*" 
                            element={<Page404 />} 
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
