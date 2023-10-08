import { Router } from 'express'
import { createJWT, refreshJWT } from '../controllers/auth.controllers'

const AuthRoutes = Router()

AuthRoutes
  .get('/', createJWT)
  .post('/refresh', refreshJWT)

export default AuthRoutes
