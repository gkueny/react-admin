import {USERISLOGIN, USERISLOGOUT} from './actions.type';


export function userIsLogin() {
    return {
        type: USERISLOGIN,
    };
}

export function userIsLogout() {
    return {
        type: USERISLOGOUT,
    };
}
