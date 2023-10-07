import mongoose from 'mongoose'

export const connect = async () => {
  try {
    await mongoose.connect('mongodb://mongodb/docker')
    console.log('Connected to MongoDB')
  } catch (e) {
    console.log(e)
    throw new Error('Error connecting to MongoDB')
  }
}
