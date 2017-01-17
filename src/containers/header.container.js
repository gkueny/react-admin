import {connect} from 'react-redux';

import HeaderComponent from '../components/header.component';

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

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(HeaderComponent);

export default HeaderContainer;
