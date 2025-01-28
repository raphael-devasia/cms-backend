import { Router } from "express"

import { createCommentController } from "../factories/commentFactory"
import { CommentController } from "../../interfaces/controllers/commentController"
import authorize from "../../interfaces/controllers/authMiddleware"


const router: Router = Router()

const commentController: CommentController = createCommentController()

router.post("/", (req, res) => commentController.createComment(req, res)) // Create comment on a post
router.get("/:postId", (req, res) => commentController.getCommentsByPostId(req, res)) // Get all comments on a post
router.get("/all/:userId", (req, res) => commentController.getCommentsByUserId(req, res)) // Get all comments on a user
router.delete("/:id",authorize, (req, res) => commentController.deleteComment(req, res)) // Delete comment by ID

export default router
