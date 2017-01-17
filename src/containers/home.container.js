import {connect} from 'react-redux';

import HomeComponent from '../components/home.component';

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

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(HomeComponent);

export default HomeContainer;
