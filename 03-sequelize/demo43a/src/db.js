require("dotenv").config();
const {Sequelize} = require("sequelize");
const {DB_USERNAME, DB_NAME, DB_PASSWORD} = process.env;

const UsersModel = require("./models/usersModel");
const PostsModel = require("./models/postsModel");

const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  {logging: false}
);

UsersModel(sequelize);
PostsModel(sequelize);

// RELACIONES O ASOCIACIONES

const {User, Post} = sequelize.models;

//Un usuario puede hacer muchos posts
User.hasMany(Post);
//Un post pertencece a un solo usuario
Post.belongsTo(User);

module.exports = {
  ...sequelize.models,
  sequelize,
};
