import mongoose, { Schema, Document } from "mongoose"
import { ICategory } from "src/domain/models/category.interface"

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    userId :{type: String, required: true}
})

const Category = mongoose.model<ICategory & Document>("Category", categorySchema)

export default Category
