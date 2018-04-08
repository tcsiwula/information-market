import Sequelize = from 'sequelize';

// var basename  = path.basename(__filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.js')[env];
// var db        = {};

var sequelize = new Sequelize('slack', 'postgres', 'postgres');

const models = {
     user: sequelize.import('./user'),
     channel: sequelize.import('./channel'),
     member: sequelize.import('./member'),
     team: sequelize.import('./team'),
     message: sequelize.import('./message'),
  };

Object.keys(db).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
