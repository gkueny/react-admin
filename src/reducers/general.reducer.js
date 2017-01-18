import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    loadingStorage : true
};

const generalReducer = (state = initialState, action) => {

    switch (action.type) {

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
