
import { CategoryUseCase } from "../../application/usecases/category.usecase"
import { CategoryController } from "../../interfaces/controllers/categoryController"
import { CategoryRepositoryMongo } from "../repositories/ categoryRepositoryMongo"

export const createCategoryController = (): CategoryController => {
    const categoryRepository = new CategoryRepositoryMongo()
    const categoryUseCase = new CategoryUseCase(categoryRepository)
    return new CategoryController(categoryUseCase)
}
