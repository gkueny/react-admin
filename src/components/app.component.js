import React, {Component} from 'react';

import '../assets/css/app.css';

class AppComponent extends Component {

    render() {

        if(this.props.state.general.loadingStorage) {
            return <div>loading...</div>;
        }

        return <div className="main">{this.props.children}</div>;
    }

}

AppComponent.propTypes = {
    children: React.PropTypes.object,
    state: React.PropTypes.object
};

export default AppComponent;
