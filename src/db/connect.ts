import mongoose from 'mongoose'
import config from '../config/config'

const { uri } = config.development.db

export const connect = async () => {
  try {
    await mongoose.connect(`${uri}`)
    console.log('Connected to MongoDB')
  } catch (e) {
    console.log(e)
    throw new Error('Error connecting to MongoDB')
  }
}
