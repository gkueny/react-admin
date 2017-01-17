import * as firebase from 'firebase';

export const checkUserStatus = (callback) => {

    let user = firebase.auth().currentUser;

    let statut = user ? true : false;

    callback(statut);

};

export const signInUser = (email, password, callbackSucces) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(e => {
        callbackSucces(true);
    })
    .catch(error => {
        callbackSucces(false, error.message);
    });

};

export const signOutUser = (callbackSucces) => {

    firebase.auth().signOut().then(() => {
        callbackSucces(true);
    }, error => {
        callbackSucces(false);
    });

};


export const registerUser = (email, password, callbackSucces) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(e => {
        callbackSucces(true);
    })
    .catch(error => {
        callbackSucces(false, error.message);
    });

};
