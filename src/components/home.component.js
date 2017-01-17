import React, {Component} from 'react';

import '../assets/css/home.css';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <p className="home-block">
                    Pouur commencer, met à jour le fichier
                    <code> src/components/app.component.js </code>
                    puis sauve et actualise.
                </p>
            </div>
        );
    }
}

HomeComponent.propTypes = {
    state: React.PropTypes.object,
};

export default HomeComponent;
