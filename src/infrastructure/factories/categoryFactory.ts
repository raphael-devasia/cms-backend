import { CategoryController } from "src/interfaces/controllers/categoryController"

import { CategoryUseCase } from "src/application/usecases/category.usecase"
import { CategoryRepositoryMongo } from "../repositories/ categoryRepositoryMongo"

export const createCategoryController = (): CategoryController => {
    const categoryRepository = new CategoryRepositoryMongo()
    const categoryUseCase = new CategoryUseCase(categoryRepository)
    return new CategoryController(categoryUseCase)
}
