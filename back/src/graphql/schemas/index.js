const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Movie {
        id: Int
        title: String
        overview: String
        poster_src: String
        backdrop_src: String
        release_date: String
        vote_count: Int
        vote_average: Int
        popularity: Int
    }

    type Query {
        movies( limit: Int, offset: Int, search: String ): [Movie]
        topMovies( limit: Int, offset: Int, search: String ): [Movie]
        popularMovies( limit: Int, offset: Int, search: String ): [Movie]
        newMovies( limit: Int, offset: Int, search: String ): [Movie]
        movie( id: Int! ): Movie
    }

    type Mutation {
        # Movies
        createMovie(
            title: String!
            overview: String!
            poster_src: String!
            release_date: String!
            vote_count: Int!
            vote_average: Int!
            popularity: Int!
        ): Boolean!
        updateMovie( 
            id: Int!
            title: String!
            overview: String!
            poster_src: String!
            release_date: String!
            vote_count: Int!
            vote_average: Int!
            popularity: Int!
        ): Boolean!
        deleteMovie( id: Int ): Boolean!
    } 
`;

module.exports = typeDefs