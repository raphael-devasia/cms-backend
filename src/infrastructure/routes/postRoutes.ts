import { Router } from "express"
import { PostController } from "../../interfaces/controllers/PostController"
import { createPostController } from "../factories/postFactory"
import { fileValidationMiddleware } from "../../interfaces/controllers/fileValidationMiddleware"
import { upload } from "../../interfaces/controllers/uploadMiddleware"






const router: Router = Router()

const postController: PostController = createPostController()
router.get("/get-url", (req, res) => postController.getPresignedUrl(req, res)) // Get all posts

router.post(
    "/upload",
    fileValidationMiddleware,
    upload.single("image"),
    (req, res) => postController.uploadImage(req, res)
) 

router.get("/all/:id", (req, res) => postController.getAllPosts(req, res)) // Get all posts
router.post("/", (req, res) => postController.createPost(req, res)) // Create a new post
router.get("/:id", (req, res) => postController.getPost(req, res)) // Get post by ID
router.put("/:id", (req, res) => postController.updatePost(req, res)) // Update post by ID
router.delete("/:id", (req, res) => postController.deletePost(req, res)) // Delete post by ID



export default router


