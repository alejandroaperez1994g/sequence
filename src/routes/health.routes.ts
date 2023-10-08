import { Router } from 'express'

const HealthRoutes = Router()

HealthRoutes.get('/', (_, res) => {
  res.status(200).send('ok')
})

export default HealthRoutes
