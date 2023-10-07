import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config/config'

const { tokenSecret } = config.development.auth

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (token === undefined) {
    res.status(401).send({ message: 'Unauthorized: No token provided' })
  }

  jwt.verify(token as string, tokenSecret, (error: jwt.JsonWebTokenError | null) => {
    if (error != null) {
      res.status(401).send({ message: (error as Error).message })
    } else {
      next()
    }
  })
}
