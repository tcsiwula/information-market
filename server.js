// to start app run the following in separate terminals:
// 1: geth --rpcapi eth,web3,personal --rpc
// 2: node server

var express = require('express');

/* Create a new Web3 connections instance; did not work 12/30/16 BR*/
//var web3 = web3();

/* Create a new Express application instance */
var app = express();

/* Use the Express application instance to listen to the '3000' port */
app.listen(3000);

/* Log the server status to the console */
console.log('Happy block live on port http://localhost:3000!')

/* Expose our application instance */
module.exports = app;
