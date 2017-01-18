import {USERISLOGIN, USERISLOGOUT} from '../actions/actions.type';

const initialState = {
    userLogin : false,
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case USERISLOGIN : {

            return {
                ...state,
                userLogin: true
            };
        }

        case USERISLOGOUT : {

            return {
                ...state,
                userLogin: false
            };
        }

        default:

            return state;
    }
};

export default userReducer;
