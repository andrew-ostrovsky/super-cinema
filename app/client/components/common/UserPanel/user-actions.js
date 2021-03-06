import axios from 'axios';

const actions = {
    REQUEST_REGISTER_USER: "REQUEST_REGISTER_USER",
    RECEIVE_REGISTER_USER: "RECEIVE_REGISTER_USER",
    ERROR_ON_REGISTER_USER: "ERROR_ON_REGISTER_USER",
    REQUEST_LOGIN_USER: "REQUEST_LOGIN_USER",
    RECEIVE_LOGIN_USER: "RECEIVE_LOGIN_USER",
    ERROR_ON_LOGIN_USER: "ERROR_ON_LOGIN_USER",
    LOGOUT_USER: "LOGOUT_USER",
    RESET_FORM_ERRORS: "RESET_FORM_ERRORS",
};

function checkIfUserIsLoggedIn() {
    return dispatch => {
        dispatch(requestLoginUser());
        axios.post("/api/user/relogin").then((res) => {
            dispatch(receiveLoginUser(res.data));
        });
    };
}

function resetFormErrors() {
  return {
      type: actions.RESET_FORM_ERRORS,
  };
}

function logout() {
  return dispatch => {
      axios.post("/api/user/logout").then((res) => {
          dispatch(logoutUser());
      });
  };
}

function loginUser(userData) {
    return dispatch => {
        dispatch(requestLoginUser());

        axios.post("/api/user/login", {
            username: userData.username,
            password: userData.password
        }).then((res) => {
            dispatch(receiveLoginUser(res.data));
        }).catch((error) => {
            if (error.response) {
                dispatch(errorOnLoginUser(error.response.data));
            } else {
                dispatch(errorOnLoginUser(error.message));
            }
        });
    };
}

function logoutUser() {
    return {
        type: actions.LOGOUT_USER,
    };
}

function errorOnLoginUser(message) {
    return {
        type: actions.ERROR_ON_LOGIN_USER,
        payload: message
    };
}

function requestLoginUser() {
    return {
        type: actions.REQUEST_LOGIN_USER,
    };
}

function receiveLoginUser(userData) {
    return {
        type: actions.RECEIVE_LOGIN_USER,
        payload: userData
    };
}

function registerUser(userData) {
    return dispatch => {
        dispatch(requestRegisterUser());

        axios.post("/api/user/register", {
            username: userData.username,
            password: userData.password
        }).then((res) => {
            dispatch(receiveRegisterUser(res.data));
        }).catch((error) => {
            if (error.response) {
                dispatch(errorOnRegisterUser(error.response.data));
            } else {
                dispatch(errorOnRegisterUser(error.message));
            }
        });
    };
}

function errorOnRegisterUser(message) {
    return {
        type: actions.ERROR_ON_REGISTER_USER,
        payload: message
    };
}

function requestRegisterUser() {
    return {
        type: actions.REQUEST_REGISTER_USER,
    };
}

function receiveRegisterUser(userData) {
    return {
        type: actions.RECEIVE_REGISTER_USER,
        payload: userData
    };
}

export {
    registerUser,
    loginUser,
    logout,
    resetFormErrors,
    checkIfUserIsLoggedIn,
    requestRegisterUser,
    errorOnRegisterUser,
    receiveRegisterUser,
    requestLoginUser,
    errorOnLoginUser,
    receiveLoginUser,
    actions
}
