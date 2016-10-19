import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    salt: String,
});

export const User = mongoose.model('user', userSchema);
