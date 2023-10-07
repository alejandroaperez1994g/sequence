import app from './server'
import { connect } from './db/connect'
import config from './config/config'

const { PORT } = config.development.app

const startServer = async () => {
  await connect()

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

void startServer()
