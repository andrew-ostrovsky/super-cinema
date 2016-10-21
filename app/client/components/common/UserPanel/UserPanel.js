import React from "react";
import {connect} from "react-redux";
import Login from "../Login/Login";
import {checkIfUserIsLoggedIn, logout} from "../UserPanel/user-actions";

import './userPanel.less';

export class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.props.checkIfUserIsLoggedIn();
    }
    renderUserInfo() {
        return (
            <div>
                <img src="/images/anonymous-icon.jpg" className="UserPanel__icon"/>
                <span className="UserPanel__greeting">Hi, {this.props.user.username}</span>
                <span>
                    <i
                        onClick={() => {
                        this.props.logout();
                    }}className="material-icons UserPanel__logout">input</i>
                </span>
            </div>
        );
    }

    renderLoginForm() {
        return (<Login/>)
    }

    render() {
        return <div className="UserPanel">
            {this.props.user.username
                ? this.renderUserInfo()
                : this.renderLoginForm()}
        </div>
    }
}

function mapStateToProps(state) {
    const componentState = state.user;

    return {user: componentState.data, errorMessage: componentState.errorMessage, isLoading: componentState.isLoading};
}

function mapDispatchToProps(dispatch) {
    return {
        checkIfUserIsLoggedIn: () => {
            return dispatch(checkIfUserIsLoggedIn());
        },
        logout: () => {
            return dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
