import { ISubscriber } from "../../domain/models/subscriber.interface"
import { ISubscriberRepository } from "../../domain/repositories/subscriberRepository.interface"


export class SubscriberUseCase {
    constructor(private subscriberRepository: ISubscriberRepository) {}

    async createSubscriber(subscriberData: ISubscriber): Promise<ISubscriber> {
        return this.subscriberRepository.create(subscriberData)
    }

    async getSubscriberById(id: string): Promise<ISubscriber | null> {
        return this.subscriberRepository.findById(id)
    }

    async getSubscriberByEmail(email: string): Promise<ISubscriber | null> {
        return this.subscriberRepository.findByEmail(email)
    }

    async getAllSubscribers(): Promise<ISubscriber[]> {
        return this.subscriberRepository.getAll()
    }

    async deleteSubscriber(id: string): Promise<boolean> {
        return this.subscriberRepository.delete(id)
    }
}
