import axios from 'axios';

const actions = {
    REQUEST_MOVIE: "REQUEST_MOVIE",
    RECEIVE_MOVIE: "RECEIVE_MOVIE",
};

function fetchMovie(id) {
    return dispatch => {
        dispatch(requestMovie(id));
        axios.get(`/api/movies/${id}`)
            .then((res) => {
                dispatch(receiveMovie(res.data));
            });
    };
}

function requestMovie() {
    return {
        type: actions.REQUEST_MOVIE,
    };
}

function receiveMovie(movie) {
    return {
        type: actions.RECEIVE_MOVIE,
        payload: movie
    };
}

export {
    requestMovie,
    receiveMovie,
    fetchMovie,
    actions
}
