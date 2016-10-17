const actions = {
    RECEIVE_COMMENT: "RECEIVE_COMMENT",
};

// Removed addComment redux action, socket.io will send new messages
function receiveComment(comment) {
    return {
        type: actions.RECEIVE_COMMENT,
        payload: comment
    };
}

export {
    receiveComment,
    actions
}
