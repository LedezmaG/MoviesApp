import React, { useEffect, useState } from 'react'

export const MovieItem = ({id, title, poster, ranked}) => {
    
    const [starts, setStarts] = useState()

    useEffect(() => {
        const startsItems = [];
        for (let i = 1; i < 11; i++) {
            console.log(i);
            if ( i <= ranked) {
                startsItems.push(<i className="fa-solid fa-star start-active" />)
            } else {
                startsItems.push(<i className="fa-solid fa-star start" />)
            }
        }
        setStarts(startsItems)
    }, [])
    
    return (
        <div className='col-3 col-md-2 movie-card shadow mb-3'>
            <img 
                className='img-thumbnail movie-card-img'
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt="" 
            />
            <div className='movie-card-body'>
                <p className='h6'>{title}</p>
                {ranked}
                <div>
                    {starts}
                </div>
            </div>
        </div>
    )
}
