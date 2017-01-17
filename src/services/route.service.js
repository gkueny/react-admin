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


export const renderLink = (login = false, link = routes(), toReturn = [], linkFather = '') => {

    if (link.childRoutes) {

        if(link.path) {
            linkFather !== '' &&  linkFather !== '/' ?
                linkFather += '/' + link.path :
                linkFather = link.path ;
        }

        link.childRoutes.forEach((children, index) => {
            renderLink(login, children, toReturn, linkFather);
        });

    } else {

        if (!login && link.private)
            return;

        if (login && link.onlyPublic)
            return;

        if (!link.title)
            return;

        let to = linkFather !== '' ?
            linkFather + '/' + link.path :
            link.path;

        let linkComponent = (
            <li key={link.id} order={link.order}>
                <Link to={to}>
                    {link.title}
                </Link>
            </li>
        );
        toReturn.push(linkComponent);

    }

    toReturn = toReturn.sort(compare);

    return toReturn;
};
