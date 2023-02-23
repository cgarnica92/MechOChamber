const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            upvotes: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;