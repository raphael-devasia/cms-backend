import { SubscriberController } from "src/interfaces/controllers/subscriberController"
import { SubscriberRepositoryMongo } from "../repositories/subscriberRepositoryMongo"
import { SubscriberUseCase } from "src/application/usecases/subscriber.usecase"

export const createSubscriberController = (): SubscriberController => {
    const subscriberRepository = new SubscriberRepositoryMongo()
    const subscriberUseCase = new SubscriberUseCase(subscriberRepository)
    return new SubscriberController(subscriberUseCase)
}

