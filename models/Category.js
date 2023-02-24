// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// Import our database connection from connection.js
const sequelize = require('../config/connection.js');

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

Category.init(
  {
    // Define columns following the requirements/instructions
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
