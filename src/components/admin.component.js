import React, {Component} from 'react';

import '../assets/css/admin.css';
import {renderLinkAdmin} from '../services/route.service';

class AdminComponent extends Component {

    render() {
        return (
            <div className="Admin">
                <nav>
                    <ul>
                        {renderLinkAdmin(this.props.state.general.userLogin)}
                    </ul>
                </nav>

                <p className="content">
                    <h1> secret </h1>
                </p>


            </div>
        );
    }

}

AdminComponent.propTypes = {
    children: React.PropTypes.object,
    state: React.PropTypes.object
};

export default AdminComponent;
