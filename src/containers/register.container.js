import {connect} from 'react-redux';
import {replace} from 'react-router-redux';
import {userIsLogin, userIsLogout} from '../actions/general.actions';

import RegisterComponent from '../components/register.component';

const mapStateToProps = (state) => {
    return {
        state: {
            general : state.general,
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

const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(RegisterComponent);

export default RegisterContainer;
