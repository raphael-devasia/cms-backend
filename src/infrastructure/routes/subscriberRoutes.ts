import { Router } from "express"

import { createSubscriberController } from "../factories/subscriberFactory"
import { SubscriberController } from "../../interfaces/controllers/subscriberController"


const router: Router = Router()

const subscriberController: SubscriberController = createSubscriberController()

router.post("/", (req, res) => subscriberController.subscribe(req, res)) // Subscribe
router.get("/:id", (req, res) => subscriberController.getSubscriber(req, res)) // Get subscriber by ID

router.delete("/:id", (req, res) =>
    subscriberController.deleteSubscriber(req, res)
) // Unsubscribe
router.get("/", (req, res) => subscriberController.getAllSubscribers(req, res)) // Get all subscribers

export default router
