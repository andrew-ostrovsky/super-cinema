import axios from 'axios';

const actions = {
    REQUEST_MOVIES: "REQUEST_MOVIES",
    RECEIVE_MOVIES: "RECEIVE_MOVIES",
};

function requestMoviesAction(dispatch) {
    axios.get("/api/movies")
        .then((res) => {
            dispatch(receiveMoviesAction(res.data));
        });

    return {
        type: actions.REQUEST_MOVIES,
    };
}

function receiveMoviesAction(movies) {
    return {
        type: actions.RECEIVE_MOVIES,
        payload: movies
    };
}

export {
    requestMoviesAction,
    receiveMoviesAction,
    actions
}
