import request, { type Response } from 'supertest'
import app from '../server'

describe('Auth Controller', () => {
  describe('GET /api/v1/jwt', () => {
    it('should return a token & refresh token', async () => {
      const response = await request(app)
        .get('/api/v1/jwt')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('token')
      expect(response.body).toHaveProperty('refreshToken')
    })
  })
  describe('POST /api/v1/refresh', () => {
    let response: Response

    beforeAll(async () => {
      response = await request(app).get('/api/v1/jwt')
    })
    it('should return a new token', async () => {
      const { refreshToken } = response.body as { refreshToken: string }

      const newResponse = await request(app)
        .post('/api/v1/jwt/refresh')
        .set('Accept', 'application/json')
        .send({ refreshToken })
      expect(newResponse.status).toBe(200)
      expect(newResponse.body).toHaveProperty('token')
    })
    it('should return 401 if refresh token is not provided', async () => {
      await request(app)
        .post('/api/v1/jwt/refresh')
        .expect(401)
        .expect({ message: 'Unauthorized: No token found!' })
    })
    it('should return an 401 if the payload key is not named correctly', async () => {
      const { refreshToken } = response.body as { refreshToken: string }

      await request(app)
        .post('/api/v1/jwt/refresh')
        .set('Accept', 'application/json')
        .send({ refreshToken2: refreshToken })
        .expect(401)
        .expect({ message: 'Unauthorized: No token found!' })
    })
    it('should return an 401 if the refresh token is not correct', async () => {
      await request(app)
        .post('/api/v1/jwt/refresh')
        .set('Accept', 'application/json')
        .send({ refreshToken: 'refreshToken' })
        .expect(401)
        .expect({ message: 'Unauthorized: Invalid token' })
    })
  })
})
