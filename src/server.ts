import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import AuthRoutes from './routes/auth.routes'
import SequenceRoutes from './routes/sequence.routes'
import { verifyJWT } from './middleware/auth.middleware'
import HealthRoutes from './routes/health.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

app.use('/api/v1/jwt', AuthRoutes)
app.use('/api/v1/sequence', verifyJWT, SequenceRoutes)
app.use('/api/v1/health', verifyJWT, HealthRoutes)

export default app
