import mongoose, { Schema, Document } from "mongoose"
import { IComment } from "../../../domain/models/comment.interface"


const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: { type: String, required: true },
})

const Comment = mongoose.model<IComment & Document>("Comment", commentSchema)

export default Comment
