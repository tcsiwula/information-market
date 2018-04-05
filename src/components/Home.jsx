import React from 'react'
import {Link} from 'react-router';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Welcome to the
                    <h1>Meshy Predictions</h1>.</p>
            </div>
        );
    }
}
