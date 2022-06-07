import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'

export const MoviesSearch = () => {

    let {search} = useParams();

    const {
        data,
        loading,
        error,
    } = useQuery(MOVIE_BY_ID, {
        variables: {
            movieId: parseInt(_id),
        }
    })

    useEffect(() => {
        try {
            if (error) {
                throw new Error(error)
            }
            if (data && !loading) {
                const startsItems = [];
                for (let i = 1; i < 11; i++) {
                    if ( i <= data.movie.vote_average) {
                        startsItems.push(<i className="fa-solid fa-star start-active" />)
                    } else {
                        startsItems.push(<i className="fa-solid fa-star start" />)
                    }
                }
                setMovie({...data.movie, starts: startsItems})
            }
        } catch (error) {
            
        }
    }, [data, loading, error])

    return (
        <div>
            <Carousel 
                data={newest}
            />
            <MovieSlider
                title="Top 10"
                data={movies}
            />
            <MovieSlider
                title="Populares"
                data={popular}
            />
        </div>
    )
}
