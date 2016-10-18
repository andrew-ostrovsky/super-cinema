import express from "express";
import path from "path";
import _ from 'lodash';

import moviesRoutes from "./routes/movies"

const app = express();
const port = 8080;

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static("dist"));

app.use("/api/movies", moviesRoutes);

app.get(["/", "/movie/*"], (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../dist/index.html"));
});

// @todo implement mongoDB store later
let messages = [];

io.sockets.on('connection', (client) => {
    client.on('join', (connectionData) => {
        client.nickname = connectionData.name;
        client.join(connectionData.room);

        // send all exising messages to new joiner
        sendMessagesOnNewConnection(client, connectionData.room);

        client.on('message', (message) => {
            client.broadcast.in(connectionData.room).emit(
                'message', {
                    clientName: client.nickname,
                    message
                });
            storeMessage(client.nickname, message,
                connectionData.room);
        });
    });
});

console.log(`Server started on port ${port}`);
server.listen(port);

function sendMessagesOnNewConnection(client, room) {
    let roomMessages = messages[room];

    if (_.isArray(roomMessages)) {
        roomMessages.forEach((messageData) => {
            client.emit('message', {
                clientName: messageData.name,
                message: messageData.message
            });
        });
    }
}

// @todo implement mongoDB store later
function storeMessage(name, message, room) {
    const messageData = {
        name,
        message
    };

    let roomMessages = messages[room];

    if (_.isArray(roomMessages)) {
        roomMessages.push(messageData);
        if (roomMessages.length > 10) {
            roomMessages.shift();
        }
    } else {
        messages[room] = [messageData];
    }

}
