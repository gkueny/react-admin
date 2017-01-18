import {connect} from 'react-redux';
import { replace } from 'react-router-redux';
import {userIsLogin, userIsLogout} from '../actions/user.actions';

import LoginComponent from '../components/login.component';

const mapStateToProps = (state) => {
    return {
        state: {
            user : state.user,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToHome: () => dispatch(replace('/')),
        userIsLogin: () => dispatch(userIsLogin()),
        userIsLogout: () => dispatch(userIsLogout())
    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(LoginComponent);

export default LoginContainer;
