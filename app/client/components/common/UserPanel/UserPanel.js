import React from "react";
import SkyLight from 'react-skylight';
import axios from 'axios';

import './userPanel.less';

export default class UserPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    // @todo use same handler for registration / login with different endpoints?
    // @todo change with form submit
    signIn(event) {
        event.preventDefault();
        axios.post("/api/user/login", {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            // @todo handle succeess
            console.log(res);
        }).catch((error) => {
            // @todo handle error
            console.log(error);
        });
    }

    // @todo change with form submit
    register(event) {
        event.preventDefault();
        axios.post("/api/user/register", {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            // @todo handle success
            console.log(res);
        }).catch((error) => {
            // @todo handle error
            console.log(error);
        });
    }

    render() {

        // @todo move UserPanel form into separate component
        return (
            <div className="UserPanel">
                <button
                    onClick={() => this.refs.customDialog.show()}
                    className="UserPanel__singnInButton waves-effect waves-light btn">Sign in</button>

                <SkyLight hideOnOverlayClicked ref="customDialog" title="Sign in">
                    <div className="UserPanel__form">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            id="username"
                                            type="text"
                                            className="validate"
                                            onChange={(ev) => {
                                            this.setState({username: ev.target.value});
                                        }}/>
                                        <label>Username</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            id="password"
                                            type="password"
                                            className="validate"
                                            onChange={(ev) => {
                                            this.setState({password: ev.target.value});
                                        }}/>
                                        <label>Password</label>
                                    </div>
                                </div>
                                <button
                                    onClick={this.signIn.bind(this)}
                                    className="UserPanel__form__button waves-effect waves-light btn">Sign in</button>

                                or
                                <button
                                    onClick={this.register.bind(this)}
                                    className="UserPanel__form__button UserPanel__form__button__register waves-effect waves-light btn">Register</button>
                            </form>
                        </div>
                    </div>
                </SkyLight>
            </div>
        );
    }
}

// @todo if user is logged in show icon/greeting

// <img src="/images/anonymous-icon.jpg" className="UserPanel__icon"/> <span
// className="UserPanel__greeting">Hi, Anonymous</span>
