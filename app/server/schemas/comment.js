import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    clientName: String,
    message: String,
    movieID: String,
});

export const Comment = mongoose.model('comment', commentSchema);
