// src/infrastructure/repositories/subscriberRepositoryMongo.ts

import { ISubscriberRepository } from "src/domain/repositories/subscriberRepository.interface"
import { ISubscriber } from "../../domain/models/subscriber.interface"
import Subscriber from "../db/models/subscriber.model"


export class SubscriberRepositoryMongo implements ISubscriberRepository {
    async create(subscriber: ISubscriber): Promise<ISubscriber> {
        const newSubscriber = new Subscriber(subscriber)
        return newSubscriber.save()
    }

    async findById(id: string): Promise<ISubscriber | null> {
        return Subscriber.findById(id).exec()
    }

    async findByEmail(email: string): Promise<ISubscriber | null> {
        return Subscriber.findOne({ email }).exec()
    }

    async getAll(): Promise<ISubscriber[]> {
        return Subscriber.find().exec()
    }

    async delete(id: string): Promise<boolean> {
        const result = await Subscriber.findByIdAndDelete(id).exec()
        return result !== null
    }
}
