

import { ICategoryRepository } from "src/domain/repositories/categoryRepository.interface"
import { ICategory } from "../../domain/models/category.interface"
import Category from "../db/models/category.model"


export class CategoryRepositoryMongo implements ICategoryRepository {
    async create(category: ICategory): Promise<ICategory> {
        console.log("Creating category:", category);
        
        const newCategory = new Category(category)
        return newCategory.save()
    }

    async findById(id: string): Promise<ICategory | null> {
        return Category.findById(id).exec()
    }

    async getAll(userId:string): Promise<ICategory[]> {
        console.log("Getting all categories for user:", userId);
        
        return Category.find({ userId:userId })
    }

    async update(
        id: string,
        categoryData: Partial<ICategory>
    ): Promise<ICategory | null> {
        return Category.findByIdAndUpdate(id, categoryData, {
            new: true,
        }).exec()
    }

    async delete(id: string): Promise<boolean> {
        const result = await Category.findByIdAndDelete(id).exec()
        return result !== null
    }
}
