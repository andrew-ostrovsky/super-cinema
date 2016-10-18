const actions = {
    RECEIVE_COMMENT: "RECEIVE_COMMENT",
    ADD_COMMENT: "ADD_COMMENT",
    CLIENT_JOINS: "CLIENT_JOINS",
};

function receiveComment(comment) {
    return {
        type: actions.RECEIVE_COMMENT,
        payload: comment
    };
}

function addComment(comment) {
    return {
        type: actions.ADD_COMMENT,
        payload: comment
    };
}

function clientJoins() {
    return {
        type: actions.CLIENT_JOINS,
    };
}

export {
    receiveComment,
    addComment,
    clientJoins,
    actions
}
