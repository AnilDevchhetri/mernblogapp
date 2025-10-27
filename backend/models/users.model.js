import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String
    },
    savedPost: {
        type: [String],//contain the post ids here in savedPost which is user post
        default: []
    },

}, { timestamps: true })

export default mongoose.model("User", userSchema)