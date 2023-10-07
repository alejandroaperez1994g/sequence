import app from './server'
import { connect } from './db/connect'
import config from './config/config'

const { PORT } = config.development.app

app.listen(PORT, async (): Promise<void> => {
  await connect()
  console.log(`Server listening on port ${PORT}`)
})
