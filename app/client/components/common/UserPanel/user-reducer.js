import {
    actions
} from "./user-actions";
import _ from 'lodash';

const initState = {
    data: {},
    errorMessage: null,
    isLoading: false,
};

export default function(state = initState, action) {
    switch (action.type) {
        case actions.REQUEST_REGISTER_USER:
            const requestRegisterUserState = _.cloneDeep(state);

            requestRegisterUserState.isLoading = true;
            return Object.assign({}, state, requestRegisterUserState);

        case actions.RECEIVE_REGISTER_USER:
            return Object.assign({}, state, {
                data: action.payload,
                isLoading: false,
                errorMessage: null
            });

        case actions.ERROR_ON_REGISTER_USER:
            return Object.assign({}, state, {
                data: {},
                isLoading: false,
                errorMessage: action.payload
            });

        case actions.REQUEST_LOGIN_USER:
            const requestLoginUserState = _.cloneDeep(state);

            requestLoginUserState.isLoading = true;
            return Object.assign({}, state, requestLoginUserState);

        case actions.RECEIVE_LOGIN_USER:
            return Object.assign({}, state, {
                data: action.payload,
                isLoading: false,
                errorMessage: null
            });

        case actions.ERROR_ON_LOGIN_USER:
            return Object.assign({}, state, {
                data: {},
                isLoading: false,
                errorMessage: action.payload
            });

        case actions.RESET_FORM_ERRORS:
            const resetFormErrorsState = _.cloneDeep(state);

            resetFormErrorsState.errorMessage = null;
            return Object.assign({}, state, resetFormErrorsState);

        case actions.LOGOUT_USER:
            return Object.assign({}, state, {
                data: {},
                isLoading: false,
                errorMessage: null
            });
        default:
            return state;
    }
}
