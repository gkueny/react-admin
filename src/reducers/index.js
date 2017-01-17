import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import generalReducer from './general.reducer';

const allReducers = combineReducers({
    general : generalReducer,
    routing : routerReducer
});

export default allReducers;
