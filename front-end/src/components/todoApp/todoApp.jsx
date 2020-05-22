import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import TodosListComponent from './TodosListComponent';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';

export default class TodoApp extends Component {
    render() {
        return(
            
            <div className='Todo-App'>
                <Router>
                    <>  
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path='/' exact component={LoginComponent}></Route>
                            <AuthenticatedRoute path='/welcome/:userName' component={WelcomeComponent}/>
                            {/*<Route path='/home' component={WelcomeComponent}></Route>
                            <Route path='/Welcome' component={WelcomeComponent}></Route>} */}
                            <Route path='/login' exact component={LoginComponent}></Route>
                            <AuthenticatedRoute path='/todos' exact component={TodosListComponent}/>
                            <Route path='/logout' exact component={LogoutComponent}/>
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>
                
                {/*<WelcomeComponent/>
                <LoginComponent/>*/}
            </div>
        );
    }
}
