import {connect} from 'react-redux';
import { replace } from 'react-router-redux';
import {userIsLogin, userIsLogout} from '../actions/general.actions';

import HaveToLogginComponent from '../components/have-to-loggin.component';

const mapStateToProps = (state) => {
    return {
        state: {
            general : state.general,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(replace('/login')),
        userIsLogin: () => dispatch(userIsLogin()),
        userIsLogout: () => dispatch(userIsLogout())
    };
};

const HaveToLogginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(HaveToLogginComponent);

export default HaveToLogginContainer;
