import {
    actions
} from "./movie-actions";
import _ from 'lodash';

const initState = {
  data: null,
  isLoading: false,
};

export default function(state = initState, action) {
    switch (action.type) {
        case actions.REQUEST_MOVIE:
            const newState = _.cloneDeep(state);
            newState.isLoading = true;
            return Object.assign({}, state, newState);

        case actions.RECEIVE_MOVIE:
            return Object.assign({}, state, {
                    isLoading: false,
                    data: action.payload
            });

        default:
            return state;
    }
}
