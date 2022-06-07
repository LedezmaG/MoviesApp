import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { MOVIES } from '../../graphql/Movies';
import { useParams } from 'react-router';
import { MovieItem } from '../Items/MovieItem';

export const MoviesSearch = () => {

    let {search} = useParams();
    const [movie, setMovie] = useState()

    const {
        data,
        loading,
        error,
    } = useQuery(MOVIES, {
        variables: {
            search: search.toString(),
        }
    })

    useEffect(() => {
        try {
            if (error) {
                throw new Error(error)
            }
            if (data && !loading) {
                setMovie(data.movies)
            }
        } catch (error) {
            
        }
    }, [data, loading, error])

    return (
        <div className='row movie-conteiner container'>
            <div>
                <h2>Resultados de busqueda: {search}</h2>
                <div className='row'>
                    { (movie) && movie.map( item => 
                        <MovieItem 
                            id={item.id}
                            poster={item.poster_src} 
                            title={item.title} 
                            ranked={item.vote_average} 
                        /> 
                    )}
                </div>
            </div>
        </div>
    )
}
