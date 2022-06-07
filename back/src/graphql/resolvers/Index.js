const MoviesModel = require("../../models/MoviesModel");
const sequelize = require("../../database/connection");
const { Op } = require("sequelize");

const resolvers = {
    Query: {
        async movies(_, { limit, offset, search } ) {
            console.log( { limit, offset, search });
            const clause = {
                where: { active: true },
            }
            if (limit !== null && offset !== null) {
                clause.offset = offset
                clause.limit = limit
            }
            if (search) {
                clause.where[Op.or] = [
                    { title: { [Op.like]: `%${search}%` } }
                ]
            }
            return await MoviesModel.findAll(clause)
        },
        async topMovies(_, { limit, offset, search } ) {
            const clause = {
                where: { active: true },
                order: [
                    ['vote_average', 'DESC'],
                ],
            }
            if (limit !== null && offset !== null) {
                clause.offset = offset
                clause.limit = limit
            }
            if (search) {
                clause.where[Op.or] = [
                    { title: { [Op.like]: `%${search}%` } }
                ]
            }
            return await MoviesModel.findAll(clause)
        },
        async popularMovies(_, { limit, offset, search } ) {
            const clause = {
                where: { active: true },
                order: [
                    ['popularity', 'DESC'],
                ],
            }
            if (limit !== null && offset !== null) {
                clause.offset = offset
                clause.limit = limit
            }
            if (search) {
                clause.where[Op.or] = [
                    { title: { [Op.like]: `%${search}%` } }
                ]
            }
            return await MoviesModel.findAll(clause)
        },
        async newMovies(_, { limit, offset, search } ) {
            const clause = {
                where: { active: true },
                order: [
                    ['release_date', 'DESC'],
                ],
            }
            if (limit !== null && offset !== null) {
                clause.offset = offset
                clause.limit = limit
            }
            if (search) {
                clause.where[Op.or] = [
                    { title: { [Op.like]: `%${search}%` } }
                ]
            }
            return await MoviesModel.findAll(clause)
        },
        async movie(_,{ id }) {
            return MoviesModel.findOne({
                where: {
                    id,
                    active: true
                }
            })
        }
    },
    Mutation: {
        async createMovie(
            _,
            { 
                title,
                overview,
                poster_src,
                release_date,
                vote_count,
                vote_average,
                popularity,
            }
        ) {
            const transaction = await sequelize.transaction()
            try {
                await MoviesModel.create(
                    {
                        title,
                        overview,
                        poster_src,
                        release_date,
                        vote_count,
                        vote_average,
                        popularity
                    },
                    transaction
                )
                await transaction.commit()
                return true
            } catch (error) {
                await transaction.rollback()
                return false
            }
        },
        async updateMovie(
            _,
            { 
                id,
                title,
                overview,
                poster_src,
                release_date,
                vote_count,
                vote_average,
                popularity,
            }
        ) {
            const transaction = await sequelize.transaction()
            try {
                await MoviesModel.update(
                    {
                        title,
                        overview,
                        poster_src,
                        release_date,
                        vote_count,
                        vote_average,
                        popularity
                    },
                    {
                        where: { 
                            id
                        },
                        transaction
                    }
                )
                await transaction.commit()
                return true
            } catch (error) {
                await transaction.rollback()
                return false
            }
        },
        async deleteMovie(_,{ id }) {
            const transaction = await sequelize.transaction()
            try {
                await MoviesModel.update(
                    {
                        active: false
                    },
                    {
                        where: { 
                            id
                        },
                        transaction
                    }
                )
                await transaction.commit()
                return true
            } catch (error) {
                await transaction.rollback()
                return false
            }
        }
    }
}

module.exports = resolvers