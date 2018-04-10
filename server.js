import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import models from './src/models';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
var env = process.env.NODE_ENV || 'development';
const dir = (path.join(__dirname, "./config.json"));
const config = require(dir)[env];
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './src/resolvers')));
// Put together a schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});
// Initialize the app
const app = express();
// The GraphQL endpoint
app.use('/graphql',
	bodyParser.json(),
	graphqlExpress({
		schema,
		context: {
			models,
		},
	}),
);
// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(() => {
	console.log('************  config.port = ' + config.port);
	app.listen(config.port);
	console.log('GraphQL server running at http://0.0.0.0:' + config.port + '/graphiql');
});