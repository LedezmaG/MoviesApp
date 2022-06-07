import React from 'react'
import { MovieItem } from './MovieItem'

export const MovieSlider = ({ title, data }) => {
    return (
        <div className='my-3 pb-3'>
            <h3>{title}</h3>
            <div className='movieSlider'>
                { (data) && data.map( item => 
                    <MovieItem 
                        poster={item.poster_src} 
                        title={item.title} 
                        ranked={item.vote_average} 
                    /> 
                )}
            </div>
        </div>
    )
}
