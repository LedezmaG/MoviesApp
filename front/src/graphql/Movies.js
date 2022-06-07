import { gql } from '@apollo/client'

export const MOVIES = gql`
    query Movies($limit: Int) {
        movies(limit: $limit) {
            id
            title
            poster_src
            vote_average
        }
    }
`

export const NEW_MOVIES = gql`
    query NewMovies($limit: Int) {
        newMovies(limit: $limit) {
            id
            title
            backdrop_src
            vote_average  
        }
    }
`

export const TOP_MOVIES = gql`
    query TopMovies($limit: Int) {
        topMovies(limit: $limit) {
            id
            title
            poster_src
            vote_average  
        }
    }
`

export const POPULAR_MOVIES = gql`
    query PopularMovies($limit: Int) {
        popularMovies(limit: $limit) {
            id
            title
            poster_src
            vote_average  
        }
    }
`
