import React from 'react'
import {Link} from 'react-router';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={bodyStyle}>
                 {this.props.bodyChildren}
             </div>
        );
    }
}

let bodyStyle = {
    color: 'black',
    backgroundColor: 'white',
    display: 'flex',
    flex: '100vh',
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'centered',
    textDecoration: 'none',
    display: 'inline-block',
    fontFamily: 'Raleway',
    justifyContent: 'space-around',
    fontSize: 20,
    top: 90,
    bottom: 300,
    left: 0,
    width: '100%',
    height: '85%',
    margin: 0,
    marginBottom: -142,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
}
