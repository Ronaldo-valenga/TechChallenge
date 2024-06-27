import mongoose from "mongoose";

const URI = 'mongodb+srv://ronaldovalenga95:m2wdB0ZsYbOtNEAx@cluster0.ibpzxme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const databaseConnection = async () => {
    if (!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection