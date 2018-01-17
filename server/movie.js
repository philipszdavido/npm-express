const mongoose = require('mongoose')

var Schema = mongoose.Schema
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/movies"

const db = mongoose.connect(url, {
    useMongoClient: true
})

var MovieSchema = new Schema({
    name: String,
    description: String,
    rating: String,
    image: String
})
export default mongoose.model('Movie', MovieSchema)