import React from 'react'
import { ReactDOM, render } from 'react-dom'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
//import App from './App.jsx'

const networkInterface = createNetworkInterface({
  uri: 'http://0.0.0.0:3080/graphql'
});

const client = new ApolloClient({
  networkInterface,
});

const App = (
  <ApolloProvider client={client}>
  <Routes />
  </ApolloProvider>
  )
  ;

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
