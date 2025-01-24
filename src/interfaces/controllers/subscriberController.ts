import { Request, Response } from "express"
import { SubscriberUseCase } from "src/application/usecases/subscriber.usecase"


export class SubscriberController {
    constructor(private subscriberUseCase: SubscriberUseCase) {}

    async subscribe(req: Request, res: Response): Promise<void> {
        try {
            const subscriber = await this.subscriberUseCase.createSubscriber(
                req.body
            )
            res.status(201).json({ success: true, data: subscriber })
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message })
        }
    }

    async getSubscriber(req: Request, res: Response): Promise<void> {
        try {
            const subscriber = await this.subscriberUseCase.getSubscriberById(
                req.params.id
            )
            if (subscriber) {
                res.status(200).json({ success: true, data: subscriber })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Subscriber not found",
                })
            }
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message })
        }
    }

   
    async deleteSubscriber(req: Request, res: Response): Promise<void> {
        try {
            const isDeleted = await this.subscriberUseCase.deleteSubscriber(
                req.params.id
            )
            if (isDeleted) {
                res.status(200).json({
                    success: true,
                    message: "Subscriber deleted",
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Subscriber not found",
                })
            }
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message })
        }
    }

    async getAllSubscribers(req: Request, res: Response): Promise<void> {
        try {
            const subscribers = await this.subscriberUseCase.getAllSubscribers()
            res.status(200).json({ success: true, data: subscribers })
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message })
        }
    }
}
