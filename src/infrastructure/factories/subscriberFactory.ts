import { SubscriberUseCase } from "../../application/usecases/subscriber.usecase"
import { SubscriberController } from "../../interfaces/controllers/subscriberController"
import { SubscriberRepositoryMongo } from "../repositories/subscriberRepositoryMongo"


export const createSubscriberController = (): SubscriberController => {
    const subscriberRepository = new SubscriberRepositoryMongo()
    const subscriberUseCase = new SubscriberUseCase(subscriberRepository)
    return new SubscriberController(subscriberUseCase)
}

