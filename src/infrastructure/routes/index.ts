import { Router } from "express"
import userRoutes from "./userRoutes"
import postRoutes from "./postRoutes"
import commentRoutes from "./commentRoutes"
import categoryRoutes from "./categoryRoutes"
import subscriberRoutes from "./subscriberRoutes"

const   router: Router = Router()

router.use("/users", userRoutes)

router.use("/posts", postRoutes)
router.use("/comments", commentRoutes)
router.use("/categories", categoryRoutes)
router.use("/subscribers", subscriberRoutes)

export default router
