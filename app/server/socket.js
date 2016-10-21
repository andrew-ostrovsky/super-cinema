import _ from 'lodash';
import {
    Comment
} from "./schemas/comment";

export function initSocketConnection(io) {
    io.sockets.on('connection', (client) => {
        client.on('join', (connectionData) => {
            client.join(connectionData.room);

            // send all exising messages to new joiner
            sendMessagesOnNewConnection(client,
                connectionData.room);

            client.on('message', (message) => {
                client.handshake.session.reload(
                    function(err) {
                        // this will give you the update session info

                        let clientName =
                            getClientName(client.handshake
                                .session);

                        client.broadcast.in(
                            connectionData
                            .room).emit(
                            'message', {
                                clientName: clientName,
                                message
                            });
                        storeMessage(clientName,
                            message,
                            connectionData.room
                        );
                    });
            });
        });
    });
}

function getClientName(session) {
    return session && session.username ? session.username : 'Anonymous';
}

function sendMessagesOnNewConnection(client, room) {
    Comment.find({
        movieID: room
    }, (err, commentList) => {
        commentList.forEach((messageData) => {
            client.emit('message', {
                clientName: messageData.clientName,
                message: messageData.message
            });
        });
    });
}

function storeMessage(clientName, message, movieID) {
    const newComment = new Comment({
        clientName,
        message,
        movieID
    });

    newComment.save((err, newComment) => {
        if (err) return console.error(err);
    });
}
