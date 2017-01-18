import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import generalReducer from './general.reducer';
import userReducer from './user.reducer';

const allReducers = combineReducers({
    general: generalReducer,
    user: userReducer,
    routing: routerReducer
});

export default allReducers;
