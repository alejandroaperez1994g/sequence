import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config/config'

const { tokenSecret } = config.development.auth

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization as string

  if (authHeader === undefined || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Unauthorized: Invalid token format' })
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, tokenSecret, (error: jwt.JsonWebTokenError | null) => {
    if (error != null) {
      return res.status(401).send({ message: (error as Error).message })
    } else {
      next()
    }
  })
}
