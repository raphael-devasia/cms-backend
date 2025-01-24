import { Request, Response } from "express"
import { CategoryUseCase } from "../../application/usecases/category.usecase"



export class CategoryController {
    constructor(private categoryUseCase: CategoryUseCase) {}

    async createCategory(req: Request, res: Response): Promise<void> {
        try {
            const category = await this.categoryUseCase.createCategory(req.body)
            res.status(201).json({ success: true, data: category })
        } catch (error:any) {
            res.status(400).json({ success: false, message: error.message })
        }
    }

    async getCategory(req: Request, res: Response): Promise<void> {
        try {
            const category = await this.categoryUseCase.getCategoryById(
                req.params.id
            )
            if (category) {
                res.status(200).json({ success: true, data: category })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Category not found",
                })
            }
        } catch (error:any) {
            res.status(500).json({ success: false, message: error.message })
        }
    }

    async updateCategory(req: Request, res: Response): Promise<void> {
        try {
            const updatedCategory = await this.categoryUseCase.updateCategory(
                req.params.id,
                req.body
            )
            if (updatedCategory) {
                res.status(200).json({ success: true, data: updatedCategory })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Category not found",
                })
            }
        } catch (error:any) {
            res.status(400).json({ success: false, message: error.message })
        }
    }

    async deleteCategory(req: Request, res: Response): Promise<void> {
        try {
            const isDeleted = await this.categoryUseCase.deleteCategory(
                req.params.id
            )
            if (isDeleted) {
                res.status(200).json({
                    success: true,
                    message: "Category deleted",
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Category not found",
                })
            }
        } catch (error:any) {
            res.status(500).json({ success: false, message: error.message })
        }
    }

    async getAllCategories(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id
            const categories = await this.categoryUseCase.getAllCategories(
                userId
            )
            res.status(200).json({ success: true, data: categories })
        } catch (error:any) {
            res.status(500).json({ success: false, message: error.message })
        }
    }
}
