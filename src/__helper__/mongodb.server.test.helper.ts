import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongoDB: MongoMemoryServer

export const connect = async () => {
  mongoDB = await MongoMemoryServer.create()
  const uri = mongoDB.getUri()
  await mongoose.connect(`${uri}docker`)
}

export const cleanData = async () => {
  await mongoose.connection.db.dropDatabase()
}

export const disconnect = async () => {
  await mongoose.connection.close()
  await mongoDB.stop()
}
