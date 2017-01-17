import {connect} from 'react-redux';

import AppComponent from '../components/app.component';

const mapStateToProps = (state) => {
    return {
        state: {
            general : state.general,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(AppComponent);

export default AppContainer;
