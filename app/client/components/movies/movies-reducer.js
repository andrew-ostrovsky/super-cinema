import {
    actions
} from "./movies-actions";
import _ from 'lodash';

const initState = {
  data: [],
  isLoading: false,
};

export default function(state = initState, action) {
    switch (action.type) {

        case actions.REQUEST_MOVIES:
            const newState = _.cloneDeep(state);
            newState.isLoading = true;
            return Object.assign({}, state, newState);

        case actions.RECEIVE_MOVIES:
            return Object.assign({}, state, {
                    isLoading: false,
                    data: action.payload
            });

        default:
            return state;
    }
}
