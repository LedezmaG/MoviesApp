import { gql } from '@apollo/client'

export const MOVIES = gql`
    query Movies($search: String) {
        movies(search: $search) {
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

export const MOVIE_BY_ID = gql`
    query Movie($movieId: Int!) {
        movie(id: $movieId) {
            id
            title
            overview
            backdrop_src
            poster_src
            release_date
            vote_count
            vote_average
            popularity
        }
    }
`
