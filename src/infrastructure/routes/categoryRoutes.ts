import { Router } from "express"

import { createCategoryController } from "../factories/categoryFactory"
import { CategoryController } from "../../interfaces/controllers/categoryController"


const router: Router = Router()

const categoryController: CategoryController = createCategoryController()

router.post("/", (req, res) => categoryController.createCategory(req, res)) // Create category
router.get("/all/:id", (req, res) => categoryController.getAllCategories(req, res)) // Get all categories
router.get("/:id", (req, res) => categoryController.getCategory(req, res)) // Get category by ID
router.put("/:id", (req, res) => categoryController.updateCategory(req, res)) // Update category
router.delete("/:id", (req, res) => categoryController.deleteCategory(req, res)) // Delete category


export default router
