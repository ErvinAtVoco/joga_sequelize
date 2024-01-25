const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Article = sequelize.define('Article', {
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
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'Author',
      key: 'id',
    },
  },
}, {
  tableName: 'article',
  timestamps: true,
});

Article.belongsTo(Author, { foreignKey: 'author_id' });

module.exports = Article;