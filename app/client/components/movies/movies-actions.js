import axios from 'axios';

const actions = {
    REQUEST_MOVIE_LIST: "REQUEST_MOVIE_LIST",
    RECEIVE_MOVIE_LIST: "RECEIVE_MOVIE_LIST",
};

function fetchMovies() {
    return dispatch => {
        dispatch(requestMovieList());
        axios.get("/api/movies")
            .then((res) => {
                dispatch(receiveMovieList(res.data));
            });
    };
}

function requestMovieList() {
    return {
        type: actions.REQUEST_MOVIE_LIST,
    };
}

function receiveMovieList(movies) {
    return {
        type: actions.RECEIVE_MOVIE_LIST,
        payload: movies
    };
}

export {
    requestMovieList,
    receiveMovieList,
    fetchMovies,
    actions
}
