import mongoose from "mongoose";

const post_schema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createAt:{
        type: Date,
        default: new Date()
    },
});

const post_message = mongoose.model('post_message', post_schema);
export default post_message ;