import {
    actions
} from "./comments-actions";
import _ from 'lodash';

const initState = {
    data: [],
};

export default function(state = initState, action) {
    let stateData;
    switch (action.type) {
        case actions.RECEIVE_COMMENT:
            stateData = _.cloneDeep(state.data);
            stateData.push(action.payload);

            return Object.assign({}, state, {
                data: stateData
            });
        case actions.ADD_COMMENT:
            stateData = _.cloneDeep(state.data);
            stateData.push(action.payload);

            return Object.assign({}, state, {
                data: stateData
            });
        case actions.CLIENT_JOINS:
            // Clear data when new client joins
            return Object.assign({}, state, {
                data: []
            });
        default:
            return state;
    }
}
