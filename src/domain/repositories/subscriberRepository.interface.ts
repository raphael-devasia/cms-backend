import { ISubscriber } from "../models/subscriber.interface"


export interface ISubscriberRepository {
    create(subscriber: ISubscriber): Promise<ISubscriber>
    findById(id: string): Promise<ISubscriber | null>
    findByEmail(email: string): Promise<ISubscriber | null>
    getAll(): Promise<ISubscriber[]>
    delete(id: string): Promise<boolean>
}
