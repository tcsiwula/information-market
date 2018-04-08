import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx'
import Docs from './Docs.jsx'
import Pricing from './Pricing.jsx'
import Features from './Features.jsx'
import Account from './Account.jsx'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/docs" exact component={Docs} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/features" exact component={Features} />
      <Route path="/account" exact component={Account} />
    </Switch>
  </BrowserRouter>
);

// import Docs from '../components/Docs.jsx'
// import Pricing from '../components/Pricing.jsx'
// import Features from '../components/Features.jsx'
// import Account from '../components/Account.jsx'
//
// class App extends React.Component {
// constructor(props) {
// super(props)
// }
// render() {
// return (
//   <div>
//     <Header/>
//     <Body bodyChildren={this.props.children}/>
//     <Footer footerChildren={this.props.children}/>
//     <Router history={browserHistory}>
//       <Route path='/' component={App}>
//         <IndexRoute component={Home} />
//         <Route path="home" component={Home} />
//         <Route path='/docs' component={Docs} />
//         <Route path='/pricing' component={Pricing} />
//         <Route path='/features' component={Features} />
//         <Route path='/account' component={Account} />
//       </Route>
//     </Router>
//   </div>
//   )}
// }
