import {
    actions
} from "./comments-actions";
import _ from 'lodash';

const initState = {
    data: [],
};

export default function(state = initState, action) {
    switch (action.type) {
        case actions.RECEIVE_COMMENT:
            const stateData = _.cloneDeep(state.data);
            stateData.push(action.payload);

            return Object.assign({}, state, {
                data: stateData
            });

        default:
            return state;
    }
}
