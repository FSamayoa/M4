const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID, // "123n123-124n1243-1243n12"
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // algoritmo que genera uuids
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 15],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
    },
    {timestamps: false}
  );
