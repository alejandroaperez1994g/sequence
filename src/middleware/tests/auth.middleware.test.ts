import request from 'supertest'
import app from '../../server'
import jwt from 'jsonwebtoken'
import config from '../../config/config'

describe('verify jwt middleware', () => {
  it('should return 401 status code if no token is provided', async () => {
    await request(app)
      .get('/api/v1/sequence')
      .expect(401)
      .expect({ message: 'Unauthorized: Invalid token format' })
  })
  it('should return 401 Unauthorized if token format is invalid', async () => {
    await request(app)
      .get('/api/v1/sequence')
      .set('Authorization', 'Basic invalidToken')
      .expect(401)
      .expect({ message: 'Unauthorized: Invalid token format' })
  })
  it('should pass to the next middleware if the token is valid', async () => {
    const data = { name: 'John' }
    const validToken = jwt.sign(data, config.development.auth.tokenSecret)

    await request(app)
      .get('/api/v1/health')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${validToken}`)
      .expect(200)
      .expect('ok')
  })
})
