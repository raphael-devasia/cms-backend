import { CommentController } from "src/interfaces/controllers/commentController"
import { CommentRepositoryMongo } from "../repositories/commentRepositoryMongo"
import { CommentUseCase } from "src/application/usecases/comment.usecase"

export const createCommentController = (): CommentController => {
    const commentRepository = new CommentRepositoryMongo()
    const commentUseCase = new CommentUseCase(commentRepository)
    return new CommentController(commentUseCase)
}
