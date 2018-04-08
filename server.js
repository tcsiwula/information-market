const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './src/models';
const path = require('path');
var env = process.env.NODE_ENV || 'development';
const dir = (path.join(__dirname, "./config.json"));
const config = require(dir)[env];
// Put together a schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});
// Initialize the app
const app = express();
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(() => {
	console.log('************  config.port = ' + config.port);
	app.listen(config.port);
	console.log('GraphQL server running at http://0.0.0.0:' + config.port + '/graphiql');
});