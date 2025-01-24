import { UserController } from "src/interfaces/controllers/userController"
import { UserRepositoryMongo } from "../repositories/userRepositoryMongo"
import { UserUseCase } from "src/application/usecases/user.usecase"


export const createUserController = (): UserController => {
    const userRepository = new UserRepositoryMongo()
    const userUseCase = new UserUseCase(userRepository)
    return new UserController(userUseCase)
}
