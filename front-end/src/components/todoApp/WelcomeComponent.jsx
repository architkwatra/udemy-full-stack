import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class WelcomeComponent extends Component {
    render() {
        return(
            <div className='container'>
                <h1>WELCOME!</h1>
                <span> Welcome to my first react + Spring Boot APP
                    Currently You are logged in as {this.props.match.params.userName}.
                    You can manage your TODOS from <Link to='/todos'>here</Link>
                </span>
            </div>
        );
    }
}
