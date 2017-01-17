export const userAuth = store => next => action => {

    console.log(action.type);

    let result = next(action);

    // if (action.type === '@@router/LOCATION_CHANGE' || action.type === REHYDRATE) {
    //
    //     checkUserStatus(store);
    // }

    return result;
};
