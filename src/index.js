import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import allReducers from './reducers';

import * as firebase from 'firebase';
import {config} from './vars/firebase.config';

import './assets/css/index.css';
import {routes} from './vars/route.vars';

firebase.initializeApp(config);

const middleware = routerMiddleware(browserHistory);
const store = createStore(allReducers, applyMiddleware(middleware), autoRehydrate());
const history = syncHistoryWithStore(browserHistory, store);

persistStore(store, {blacklist: ['routing']}); //.purge();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes(store)}/>
    </Provider>
, document.getElementById('root'));
