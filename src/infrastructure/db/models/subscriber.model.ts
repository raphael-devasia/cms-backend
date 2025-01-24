import mongoose, { Schema, Document } from "mongoose"
import { ISubscriber } from "src/domain/models/subscriber.interface"

const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    subscribedAt: { type: Date, default: Date.now },
})

const Subscriber = mongoose.model<ISubscriber & Document>("Subscriber", subscriberSchema)


export default Subscriber