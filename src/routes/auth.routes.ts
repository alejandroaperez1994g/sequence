import { Router } from 'express'
import { createJWT, refreshJWT } from '../controllers/auth.controllers'

const AuthRoutes = Router()

AuthRoutes
  .post('/', createJWT)
  .post('/refresh', refreshJWT)

export default AuthRoutes
