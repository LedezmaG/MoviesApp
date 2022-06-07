const { DataTypes } = require('sequelize')
const Connection = require('../database/connection')

const MoviesModel = Connection.define('catalog_movies', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    overview: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    poster_src: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    backdrop_src: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    vote_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    vote_average: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    popularity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
})

module.exports = MoviesModel;
