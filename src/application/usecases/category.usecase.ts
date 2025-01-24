import { ICategory } from "src/domain/models/category.interface"
import { ICategoryRepository } from "src/domain/repositories/categoryRepository.interface"


export class CategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async createCategory(categoryData: ICategory): Promise<ICategory> {
        return this.categoryRepository.create(categoryData)
    }

    async getCategoryById(id: string): Promise<ICategory | null> {
        return this.categoryRepository.findById(id)
    }

    async getAllCategories(userId:string): Promise<ICategory[]> {
        return this.categoryRepository.getAll(userId)
    }

    async updateCategory(
        id: string,
        categoryData: Partial<ICategory>
    ): Promise<ICategory | null> {
        return this.categoryRepository.update(id, categoryData)
    }

    async deleteCategory(id: string): Promise<boolean> {
        return this.categoryRepository.delete(id)
    }
}
