import React from "react";
import SkyLight from 'react-skylight';
import axios from 'axios';
import {connect} from "react-redux";
import {registerUser, loginUser} from "../UserPanel/user-actions";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    signIn(event) {
        event.preventDefault();
        this.props.loginUser({username: this.state.username, password: this.state.password});
    }

    // @todo change with form submit
    register(event) {
        event.preventDefault();
        this.props.registerUser({username: this.state.username, password: this.state.password});
    }

    renderError() {
        return this.props.errorMessage
            ? (
                <div className="row">
                    <div className="UserPanel__form__error">
                        {this.props.errorMessage}
                    </div>
                </div>
            )
            : '';
    }

    onOpenModalButtonClick() {
      // @todo state should change props?
      this.setState({errorMessage: null});
      this.refs.customDialog.show();
    }

    render() {
        // @todo move UserPanel form into separate component
        return (
          <div>
              <button
                  onClick={this.onOpenModalButtonClick.bind(this)}
                  className="UserPanel__singnInButton waves-effect waves-light btn">Sign in</button>

              <SkyLight isVisible={this.state.showModal} hideOnOverlayClicked ref="customDialog" title="Sign in">
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
                              <div className="UserPanel__form__controls row">
                                  <button
                                      onClick={this.signIn.bind(this)}
                                      className="UserPanel__form__controls__button waves-effect waves-light btn">Sign in</button>

                                  or
                                  <button
                                      onClick={this.register.bind(this)}
                                      className="UserPanel__form__controls__button UserPanel__form__controls__button__register waves-effect waves-light btn">Register</button>
                              </div>
                              {this.renderError()}
                          </form>
                      </div>
                  </div>
              </SkyLight>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const componentState = state.user;

    return {user: componentState.data, errorMessage: componentState.errorMessage, isLoading: componentState.isLoading};
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: (userData) => {
            return dispatch(registerUser(userData));
        },
        loginUser: (userData) => {
            return dispatch(loginUser(userData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
