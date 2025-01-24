import { ICategory } from "../models/category.interface"

export interface ICategoryRepository {
    create(category: ICategory): Promise<ICategory>
    findById(id: string): Promise<ICategory | null>
    getAll(userId:string): Promise<ICategory[]>
    update(id: string, category: Partial<ICategory>): Promise<ICategory | null>
    delete(id: string): Promise<boolean>
}
