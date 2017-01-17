import React, {Component} from 'react';
import {checkUserStatus} from '../services/user.service';

class HaveToLogginComponent extends Component {

    componentDidMount() {
        checkUserStatus(this.updateUserStatus);
    }

    componentDidUpdate() {
        checkUserStatus(this.updateUserStatus);
    }

    updateUserStatus = (isLogIn) => {

        if(!isLogIn && this.props.state.general.userLogin) {
            this.props.userIsLogout();
        } else if (isLogIn && !this.props.state.general.userLogin) {
            this.props.userIsLogin();
        }

        if(!this.props.state.general.userLogin) {
            this.props.goToLogin();
        }
    }

    render() {

        if (this.props.state.general.userLogin)
            return this.props.children;
        else
            return null;

    }
}

HaveToLogginComponent.propTypes = {
    children: React.PropTypes.object,
    state: React.PropTypes.object,
    goToLogin: React.PropTypes.func,
    userIsLogout: React.PropTypes.func,
    userIsLogin: React.PropTypes.func
};

export default HaveToLogginComponent;
