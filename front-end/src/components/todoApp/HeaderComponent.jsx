import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return(
            <header> 
                <nav className='navbar navbar-dark navbar-expand-md bg-dark'>
                    <div><span className='navbar-brand'>My first React APP</span></div>
                    <ul className='navbar-nav'>
                        <li>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        {isUserLoggedIn && <li><Link className='nav-link' to='/todos'>Todos</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!isUserLoggedIn && <li><Link className='nav-link' to='/login'>Login</Link></li>}
                        {isUserLoggedIn && <li><Link className='nav-link' to='/logout' onClick={AuthenticationService.removeUserInfoFromSessionStorage}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);