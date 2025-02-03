import mongoose from 'mongoose'

export const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    if (connect) {
      console.log('Connected to MongoDB')
    }
  } catch (error) {
    console.log(error)
  }
}