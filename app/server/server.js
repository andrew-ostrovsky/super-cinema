import express from "express";
import path from "path";
import mongoose from "mongoose";

import moviesRoutes from "./routes/movies";
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

    app.use("/api/movies", moviesRoutes);

    app.get(["/", "/movie/*"], (req, res) => {
        res.sendFile(path.resolve(__dirname,
            "../../dist/index.html"));
    });

    initSocketConnection(io);

    console.log(`Server started on port ${port}`);
    server.listen(port);
});
