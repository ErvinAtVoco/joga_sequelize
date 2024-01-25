const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'author',
  timestamps: false,
});

Author.hasMany(Article, { foreignKey: 'author_id' });

module.exports = Author;