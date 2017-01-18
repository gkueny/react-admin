import React, {Component} from 'react';
import {Link} from 'react-router';

import {signInUser} from '../services/user.service';

import '../assets/css/login.css';

class LoginComponent extends Component {

    constructor() {
        super();

        this.state = {
            succesful: false,
            email: "",
            password: "",
            errorMessage: "",
            succesfulMessage: "",
            send: false
        };
    }

    componentDidUpdate() {
        if (this.props.state.user.userLogin) {
            this.props.goToHome();
        }
    }

    success = (statut, message) => {
        if(statut === true) {
            this.setState({
                succesfulMessage: "Vous êtes bien connecté ! ",
                send: false
            });
            this.props.userIsLogin();
        } else {
            this.setState({
                errorMessage: message,
                send: false
            });
            this.props.userIsLogout();
        }
    }

    handleEmailChange = e => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = e => {
        this.setState({password: e.target.value});
    }

    validate = e => {
        e.preventDefault();

        this.setState({
            errorMessage: "",
            send: true
        });

        //setTimeout to just to see Load... message
        setTimeout(() => {

            signInUser(this.state.email, this.state.password, this.success);

        }, 1000);
    }

    render() {
        return (
            <div className="login">
                <div className="form">
                    <form className="login-form">
                        <h3>Login</h3>
                        <p className="error message">
                            {this.state.errorMessage
                                ? this.state.errorMessage
                                : ""}
                        </p>
                        <p className="succesfulMessage message">
                            {this.state.succesfulMessage
                                ? this.state.succesfulMessage
                                : ""}
                        </p>
                        <input type="text" placeholder="username" onChange={this.handleEmailChange}/>
                        <input type="password" placeholder="password" onChange={this.handlePasswordChange}/>
                        <button onClick={this.validate}>
                            {this.state.send
                                ? "load..."
                                : "login"}
                        </button>
                        <p className="message">
                            Not registered? <Link to="register"> Create an account </Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

}

LoginComponent.propTypes = {
    children: React.PropTypes.object,
    state: React.PropTypes.object,
    goToHome: React.PropTypes.func,
    userIsLogin: React.PropTypes.func,
    userIsLogout: React.PropTypes.func,
};

export default LoginComponent;
