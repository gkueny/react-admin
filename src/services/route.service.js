import React from 'react';
import {Link} from 'react-router';

import {routes} from '../vars/route.vars';

function compare(a, b) {
    if (a.props.order < b.props.order)
        return -1;
    if (a.props.order > b.props.order)
        return 1;
    return 0;
}


export const renderLink = (login = false, link = routes(), toReturn = []) => {

    if (link.childRoutes) {

        link.childRoutes.forEach((children, index) => {
            renderLink(login, children, toReturn);
        });

    } else {

        if (!login && link.private)
            return;

        if (login && link.onlyPublic)
            return;

        let linkComponent = (
            <li key={link.id} order={link.order}>
                <Link to={link.path}>
                    {link.title}
                </Link>
            </li>
        );
        toReturn.push(linkComponent);

    }

    toReturn = toReturn.sort(compare);

    return toReturn;
};
