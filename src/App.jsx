import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
// import Web3 from 'web3'

export default class App extends React.Component {
    constructor(props) {
        super(props)

   //      if(typeof web3 != 'undefined'){
   //    console.log("Using web3 detected from external source like Metamask")
   //    this.web3 = new Web3(web3.currentProvider)
   // }else{
   //    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
   // }


    }

    render() {
        return (
                <div>
                <Header/>

                 <Body
                   bodyChildren={this.props.children}
                 />

                  <Footer
                   footerChildren={this.props.children}
                 />
                 </div>
        )
    }
}
