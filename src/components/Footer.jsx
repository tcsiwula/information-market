import React from 'react'
import {Link} from 'react-router';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <footer style={footerStyle}>
                    Short the fiat 😝 {/* {this.props.footerChildren} */}
                </footer>
        );
    }
}

let footerStyle = {
    color: 'black',
    background: 'darkGrey',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    alignItems: 'centered',
    fontFamily: 'Raleway',
    minHeight: '10vh',
    fontSize: 20,
    bottom: 0,
    left: 0,
    width: '100%',
    margin: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
}
