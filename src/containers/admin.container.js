import {connect} from 'react-redux';

import AdminComponent from '../components/admin.component';

const mapStateToProps = (state) => {
    return {
        state: {
            user : state.user,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(AdminComponent);

export default AdminContainer;
