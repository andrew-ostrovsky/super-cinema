import {
    actions
} from "./movie-actions";
import _ from 'lodash';

const initState = {
    data: {},
    isLoading: false,
};

export default function(state = initState, action) {
    switch (action.type) {
        case actions.REQUEST_MOVIE:
            const requestMovieState = _.cloneDeep(state);

            requestMovieState.isLoading = true;
            return Object.assign({}, state, requestMovieState);

        case actions.RECEIVE_MOVIE:
            const movie = action.payload;
            const receiveMovieState = _.cloneDeep(state);

            receiveMovieState.isLoading = false;
            receiveMovieState.data[movie.imdbID] = movie;

            return Object.assign({}, state, receiveMovieState);

        default:
            return state;
    }
}
