import express from "express";
import path from "path";
import mongoose from "mongoose";
import session from "express-session";
import sharedSession from "express-socket.io-session";

import moviesRoutes from "./routes/movies";
import userRoutes from "./routes/user";
import {
    initSocketConnection
} from "./socket";

mongoose.connect("mongodb://localhost");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We're connected!");
    const app = express();
    const port = 8080;

    const server = require('http').createServer(app);
    const io = require('socket.io').listen(server);

    app.use(express.static("dist"));

    app.set('trust proxy', 1) // trust first proxy

    let userSession = session({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true
    });

    // @todo Store session in mongoDB
    app.use(userSession);

    // Share express and socket.io user session
    io.use(sharedSession(userSession, {
        autoSave:true
    }));

    app.use("/api/movies", moviesRoutes);
    app.use("/api/user", userRoutes);

    app.get(["/", "/movie/*"], (req, res) => {
        res.sendFile(path.resolve(__dirname,
            "../../dist/index.html"));
    });

    initSocketConnection(io);

    console.log(`Server started on port ${port}`);
    server.listen(port);
});
