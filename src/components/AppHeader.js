import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';

class AppHeader extends PureComponent {
    render() {
        let output;
        let { loggedInUser } = this.props;
        if (!loggedInUser) {
            output = (<div className="form-inline">
                <Link to='/login'
                    className="btn btn-outline-success mr-1">Login</Link>

                <Link to='/register'
                    className="btn btn-outline-success">Register</Link>
            </div>);
        }
        else {
            output = (<div className="form-inline">
                <span class="mr-3"> {loggedInUser.name} </span>
                <button className="btn btn-outline-danger"
                    onClick={() => {
                        this.props.logout();
                    }}>Logout</button>
            </div>);
        }

        return (
            <nav className="navbar navbar-default">
                <a href="#" className="navbar-brand app-logo"> Naga </a>
                {output}
            </nav>
        );
    }
}

const stateAsProps = (store) => ({
    loggedInUser: store.customerReducer.loggedInUser
});
export default connect(stateAsProps, { logout })(AppHeader);