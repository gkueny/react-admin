import React, {Component} from 'react';
import {Link} from 'react-router';

import {registerUser} from '../services/user.service';

import '../assets/css/login.css';

class RegisterComponent extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            password2: "",
            errorMessage: "",
            succesfulMessage: "",
            send: false
        };
    }

    componentDidUpdate() {
        if (this.props.state.general.userLogin) {
            this.props.goToHome();
        }
    }

    success = (statut, message) => {

        if(statut) {

            this.setState({
                succesfulMessage: "Vous êtes bien enregistré ! ",
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
    handleSecondPasswordChange = e => {
        this.setState({password2: e.target.value});
    }

    validate = e => {
        e.preventDefault();

        if(this.state.password !== this.state.password2) {
            this.setState({
                errorMessage: "Veuillez saisir les mêmes mots de passes"
            });
            return;
        }

        this.setState({errorMessage: "", send: true});

        //setTimeout to just to see Load... message
        setTimeout(() => {

            registerUser(this.state.email, this.state.password, this.success);

        }, 1000);
    }

    render() {
        return (
            <div className="login">
                <div className="form">
                    <form className="register-form">
                        <h3>Register</h3>
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
                        <input type="text" placeholder="email address"  onChange={this.handleEmailChange}/>
                        <input type="password" placeholder="password" onChange={this.handlePasswordChange}/>
                        <input type="password" placeholder="confirm password" onChange={this.handleSecondPasswordChange}/>
                        <button onClick={this.validate}>
                            {this.state.send
                                ? "load..."
                                : "Create"}
                        </button>
                        <p className="message">
                            Already registered?  <Link to="login"> login </Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

}

RegisterComponent.propTypes = {
    children: React.PropTypes.object,
    state: React.PropTypes.object,
    goToHome: React.PropTypes.func,
    userIsLogin: React.PropTypes.func,
    userIsLogout: React.PropTypes.func,
};

export default RegisterComponent;
