// import React, { useEffect, useState } from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom";
// import { MoviesHome } from '../components/Movies/MoviesHome'
// import { MoviesDetails } from '../components/Movies/MoviesDetails'
// import { Page404 } from '../components/Pages/Page404'

// export const AppRouter = () => {

//     const [loading, setLoading] = useState(false)

//     useEffect(() => {}, [])

//     return (
//         <Router>
//             <Switch>
//                 <Route 
//                     path="/" 
//                     element={<MoviesHome />} 
//                 />
//                 <Route 
//                     path="/movie/:id" 
//                     element={<MoviesDetails />} 
//                 />
//                 <Route 
//                     path="*" 
//                     element={<Page404 />} 
//                 />
//             </Switch>
//         </Router>
//     )
// }
