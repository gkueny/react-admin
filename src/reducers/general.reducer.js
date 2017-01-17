import {USERISLOGIN, USERISLOGOUT} from '../actions/actions.type';
import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    userLogin : false,
    loadingStorage : true
};

const generalReducer = (state = initialState, action) => {

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

        case REHYDRATE : {
            
            const incoming = action.payload.general;

            return {
                ...state,
                ...incoming,
                loadingStorage: false
            };
        }

        default:

            return state;
    }
};

export default generalReducer;
