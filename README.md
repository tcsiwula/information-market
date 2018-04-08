# start the graphql server
```
yarn start
```
then open
```
http://0.0.0.0:8080/graphiql
```

# start the front end webpack server
```
yarn dev
```
then open
```
http://0.0.0.0:3080
```
and enter queries
```
{
  hi
}
```
# npm scripts:
```
"scripts": {
  "development": "NODE_ENV=development PORT=3333 nodemon --exec babel-node server.js",
  "staging": "NODE_ENV=staging PORT=9999 forever --exec babel-node server.js",
  "production": "NODE_ENV=production PORT=3080 forever start server.js",
  "start": "nodemon --exec babel-node server.js",
  "react-development": "webpack-dev-server --color",
  "clean": "rm -rf build && mkdir build"
},
```
