import express from "express";
import path from "path";

import moviesRoutes from "./routes/movies"

const app = express();
const port = 8080;

app.use(express.static("dist"));

app.use("/api/movies", moviesRoutes);

app.get(["/"], (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

console.log(`Server started on port ${port}`);
app.listen(port);
