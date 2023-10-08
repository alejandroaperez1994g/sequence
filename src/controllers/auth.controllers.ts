import { type Request, type Response } from 'express'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import config from '../config/config'

const { tokenSecret, refreshTokenSecret } = config.development.auth
const refreshTokens: string[] = []

export const createJWT = (req: Request, res: Response): void => {
  const name = 'John'

  const token = jwt.sign({ name }, tokenSecret, { expiresIn: '10m' })
  const refreshToken = jwt.sign({ name }, refreshTokenSecret)
  refreshTokens.push(refreshToken)

  res.send({ token, refreshToken })
}

interface DecodedToken {
  name: string
}

export const refreshJWT = (req: Request, res: Response) => {
  const { refreshToken } = req.body as { refreshToken: string }
  if (refreshToken === undefined) return res.status(401).send({ message: 'Unauthorized: No token found!' })
  if (!refreshTokens.includes(refreshToken)) return res.status(401).send({ message: 'Unauthorized: Invalid token' })

  try {
    const decoded = jwt.verify(refreshToken, refreshTokenSecret) as DecodedToken
    const token = jwt.sign({ name: decoded.name }, tokenSecret, { expiresIn: '10m' })
    res.send({ token })
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(403).send({ message: 'Forbidden: Invalid token' })
    }
  }
}
