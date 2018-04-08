import Sequelize from 'sequelize';
const path = require('path');
var env = process.env.NODE_ENV || 'development';
const dir = (path.join(__dirname, "../../config.json"));
const config = require(dir)[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
     dialect: 'postgres'});

const models = {
     User: sequelize.import('./user'),
     Channel: sequelize.import('./channel'),
     Team: sequelize.import('./team'),
     Message: sequelize.import('./message')
  };

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
