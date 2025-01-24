import { IPost } from "src/domain/models/post.interface"

import mongoose, { Schema, Document } from "mongoose"

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    permalink: { type: String, required: true },
    category: {
        category: { type: String, required: true },
        categoryId: { type: String, required: true },
        // categoryId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Category",
        //     required: true,
        // },
    },
    content: { type: String, required: true },
    image: { type: String },
    excerpt: { type: String },
    isFeatured: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    status: { type: String, default: "new" },
    createdAt: { type: Date, default: Date.now },
    userId: { type: String, required: true },
})

const Post = mongoose.model<IPost & Document>("Post", postSchema)

export default Post
