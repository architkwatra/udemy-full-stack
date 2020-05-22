import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js'

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: 'someEmailId',
            password: 'somePassword',
            hasLoginFailed: false,
            isLoginSuccessfull: false
        }
 
        this.handleLoginDetailsChangeEvent = this.handleLoginDetailsChangeEvent.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <>
                <h1>LOGIN</h1>
                <div className='container'>
                    <ShowLoginMessage hasLoginFailed={this.state.hasLoginFailed}></ShowLoginMessage>
                    {this.state.isLoginSuccessfull && <div> <span>Login Successfull</span> </div>}
                    <ShowLoginMessage isLoginSuccessfull={this.state.isLoginSuccessfull}></ShowLoginMessage>
                    {this.state.hasLoginFailed && <CheckSimpleIfInHtml/>}
                    <div className='login-details'>
                        Username: <input type='text' className='user-name' name = 'userName' value={this.state.userName} onChange = {this.handleLoginDetailsChangeEvent}></input>
                        Password: <input type='password' className='password' name= 'password' value={this.state.password} onChange = {this.handleLoginDetailsChangeEvent}></input>
                        <button className='btn btn-success' type='submit' onClick={this.login}>Login</button>
                    </div>
                </div>
            </>
        )
    }

    handleLoginDetailsChangeEvent(event) {
        this.setState({[event.target.name]: event.target.value})
    } 

    login() {
        if (this.state.userName === 'someEmailId' && this.state.password === 'somePassword') {
            AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.password);
            this.setState({
                hasLoginFailed: false,
                isLoginSuccessfull: true
            });
            this.props.history.push(`welcome/${this.state.userName}`);
        } else {
            this.setState({
                hasLoginFailed: true,
                isLoginSuccessfull: false
            })
        }
    }
}
function ShowLoginMessage(props) {
    if (props.hasLoginFailed) {
        return(
            <div className='alert alert-warning'>Invalid Credentials</div>
        )
    } else if (props.isLoginSuccessfull) {
        return (
            <div>Login Successfull</div>
        )
    }
    return null;
}   
function CheckSimpleIfInHtml() {
    return (
        <div>
            <span>Invalid Credentials</span>
        </div>
    );
}
