import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { POPULAR_MOVIES, TOP_MOVIES, NEW_MOVIES } from '../../graphql/Movies'
import { Carousel } from '../Items/Carousel'
import { MovieSlider } from '../Items/MovieSlider'

export const MoviesHome = () => {

    const [movies, setMovies] = useState([])
    const [newest, setNewest] = useState([])
    const [popular, setPopular] = useState([])

    const {
        data: dataNew,
        loading: loadingNew,
        error: errorNew,
    } = useQuery(NEW_MOVIES, {
        variables: {
            limit: 10,
        }
    })
    const {
        data: dataTop,
        loading: loadingTop,
        error: errorTop,
    } = useQuery(TOP_MOVIES, {
        variables: {
            limit: 10,
        }
    })
    const {
        data: dataPopular,
        loading: loadingPopular,
        error: errorPopular,
    } = useQuery(POPULAR_MOVIES, {
        variables: {
            limit: 10,
        }
    })

    useEffect(() => {
        try {
            if (errorTop) {
                throw new Error(errorTop)
            }
            if (dataTop && !loadingTop) {
                setMovies(dataTop.topMovies)
            }
        } catch (error) {
            
        }
    }, [dataTop, loadingTop, errorTop])
    useEffect(() => {
        try {
            if (errorPopular) {
                throw new Error(errorPopular)
            }
            if (dataPopular && !loadingPopular) {
                setPopular(dataPopular.popularMovies)
            }
        } catch (error) {
            
        }
    }, [dataPopular, loadingPopular, errorPopular])
    useEffect(() => {
        try {
            if (errorNew) {
                throw new Error(errorNew)
            }
            if (dataNew && !loadingNew) {
                const list = dataNew.newMovies.map(item => ({...item, original: `https://image.tmdb.org/t/p/w500${item.backdrop_src}`})) 
                setNewest(list)
            }
        } catch (error) {
            
        }
    }, [dataNew, loadingNew, errorNew])


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
