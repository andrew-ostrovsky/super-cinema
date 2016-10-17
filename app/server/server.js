import express from "express";
import path from "path";

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
let messages = [
  {name: 'Anonymous', message: 'Hi there!'},
  {name: 'Anonymous', message: 'Hello?'}
];

// @todo strill working on that part
// @todo implement different rooms (based on movie ID)

io.sockets.on('connection', (client) => {
  client.on('message', (message) => {
    client.broadcast.emit('message', {clientName: client.nickname, message});
    client.emit('message', {clientName: client.nickname, message});
    storeMessage(client.nickname, message);
  });

  client.on('join', (name) => {
    client.nickname = name;

    messages.forEach((messageData) => {
      client.emit('message', {clientName: messageData.name, message: messageData.message});
    });
  })
});

console.log(`Server started on port ${port}`);
server.listen(port);

function storeMessage(name, message) {
  messages.push({name, message});
  if (messages.length > 10){
    messages.shift();
  }
}
