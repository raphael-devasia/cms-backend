    
    import { PostController } from "src/interfaces/controllers/PostController"
import { PostRepositoryMongo } from "../repositories/postRepositoryMongo"
    import { PostUseCase } from "src/application/usecases/post.usecase"

    export const createPostController = (): PostController => {
       
        
        const postRepository = new PostRepositoryMongo()
        const postUseCase = new PostUseCase(postRepository)
        return new PostController(postUseCase)
    }
