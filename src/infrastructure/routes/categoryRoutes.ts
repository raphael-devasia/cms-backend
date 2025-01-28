import { Router } from "express"

import { createCategoryController } from "../factories/categoryFactory"
import { CategoryController } from "../../interfaces/controllers/categoryController"
import authorize from "../../interfaces/controllers/authMiddleware"


const router: Router = Router()

const categoryController: CategoryController = createCategoryController()

router.post("/",authorize, (req, res) => categoryController.createCategory(req, res)) // Create category
router.get("/all/:id", (req, res) => categoryController.getAllCategories(req, res)) // Get all categories
router.get("/:id", (req, res) => categoryController.getCategory(req, res)) // Get category by ID
router.put("/:id",authorize, (req, res) => categoryController.updateCategory(req, res)) // Update category
router.delete("/:id",authorize, (req, res) => categoryController.deleteCategory(req, res)) // Delete category


export default router
