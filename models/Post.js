const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init (
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        upvotes: DataTypes.INTEGER
    },
    {
        sequelize
    }
);

module.exports = Post;