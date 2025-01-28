import { Router } from "express"

import { createSubscriberController } from "../factories/subscriberFactory"
import { SubscriberController } from "../../interfaces/controllers/subscriberController"
import authorize from "../../interfaces/controllers/authMiddleware"


const router: Router = Router()

const subscriberController: SubscriberController = createSubscriberController()

router.post("/",authorize, (req, res) => subscriberController.subscribe(req, res)) // Subscribe
router.get("/:id",authorize, (req, res) => subscriberController.getSubscriber(req, res)) // Get subscriber by ID

router.delete("/:id",authorize, (req, res) =>
    subscriberController.deleteSubscriber(req, res)
) // Unsubscribe
router.get("/",authorize, (req, res) => subscriberController.getAllSubscribers(req, res)) // Get all subscribers

export default router
