import { Router } from "express"
import { createUserController } from "../factories/userFactory"

const userRoutes = Router()
const userController = createUserController()

userRoutes.post("/register", (req, res) => userController.createUser(req, res))
userRoutes.post("/login", (req, res) => userController.loginUser(req, res))
userRoutes.get("/", (req, res) => userController.getAllUsers(req, res))
userRoutes.get("/:id", (req, res) => userController.getUser(req, res))
userRoutes.put("/:id", (req, res) => userController.updateUser(req, res))
userRoutes.delete("/:id", (req, res) => userController.deleteUser(req, res))



export default userRoutes
