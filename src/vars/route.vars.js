import {signOutUser} from '../services/user.service';
import {userIsLogout} from '../actions/general.actions';
import {replace} from 'react-router-redux';

import HaveToLogginContainer from '../containers/have-to-loggin.container';
import AppContainer from '../containers/app.container';
import HeaderContainer from '../containers/header.container';
import LoginContainer from '../containers/login.container';
import RegisterContainer from '../containers/register.container';
import AdminComponent from '../components/admin.component';
import HomeContainer from '../containers/home.container';


const logout = (success, store) => {
        if(success) {
            store.dispatch(userIsLogout());
            store.dispatch(replace('/'));
        }
};

export const routes = (store) => {
    return {
        component: AppContainer,
        childRoutes: [
            {
                component: HeaderContainer,
                childRoutes: [
                    {
                        path: '/',
                        component: HomeContainer,
                        id: 1,
                        title: 'Accueil',
                        private: false,
                        onlyPublic: false,
                        order: 0
                    }, {
                        path: 'login',
                        component: LoginContainer,
                        id: 2,
                        title: 'Connexion',
                        private: false,
                        onlyPublic: true,
                        order: 2
                    }, {
                        path: 'register',
                        component: RegisterContainer,
                        id: 5,
                    }, {
                        path: 'logout',
                        id: 4,
                        title: 'Déconnexion',
                        private: true,
                        order: 4,
                        onEnter: (nextState, replace) => {

                            signOutUser((success) => {
                                logout(success, store);
                            });

                        }
                    }
                ]
            }, {
                component: HaveToLogginContainer,
                childRoutes: [
                    {
                        path: 'admin',
                        component: AdminComponent,
                        id: 3,
                        title: 'Admin',
                        private: true,
                        onlyPublic: false,
                        order: 1
                    }
                ]
            }
        ]
    };
};
