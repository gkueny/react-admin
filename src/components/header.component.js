import React, {Component} from 'react';

import logo from '../assets/images/logo.svg';
import {renderLink} from '../services/route.service';
import '../assets/css/app.css';

class HeaderComponent extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Hey ! Bienvenue sur ton application React</h2>
                    <nav>
                        <ul>
                            {renderLink(this.props.state.general.userLogin)}
                        </ul>
                    </nav>
                </div>

                {this.props.children}

            </div>
        );
    }

}

HeaderComponent.propTypes = {
    children: React.PropTypes.object,
    state: React.PropTypes.object
};

export default HeaderComponent;
