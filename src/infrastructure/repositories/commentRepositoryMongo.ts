import { IComment } from "src/domain/models/comment.interface"
import { ICommentRepository } from "src/domain/repositories/commentRepository.interface"
import  Comment  from "../db/models/comment.model"


export class CommentRepositoryMongo implements ICommentRepository {
    async create(comment: IComment): Promise<IComment> {
        const newComment = new Comment(comment)
        return newComment.save()
    }

    async findById(id: string): Promise<IComment | null> {
        return Comment.findById(id).exec()
    }

    async getAllByPost(postId: string): Promise<IComment[]> {
        return Comment.find({ postId }).exec()
    }

    async update(
        id: string,
        commentData: Partial<IComment>
    ): Promise<IComment | null> {
        return Comment.findByIdAndUpdate(id, commentData, { new: true }).exec()
    }

    async delete(id: string): Promise<boolean> {
        const result = await Comment.findByIdAndDelete(id).exec()
        return result !== null
    }
}
