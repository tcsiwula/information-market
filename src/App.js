import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Router, Route, Link } from 'react-router';
// import Header from './components/Header.jsx';
// import Body from './components/Body.jsx';
// import Footer from './components/Footer.jsx';
// import Account from './routes/Account.jsx';
//
// // import Web3 from 'web3'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> hi</h1>
//         <Header />
//         <Body bodyChildren={this.props.children} />
//         <Footer footerChildren={this.props.children} />
//       </div>
//     );
//   }
// }
//
// export default App;
