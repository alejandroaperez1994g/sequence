import jwt from 'jsonwebtoken'
import request, { type Response } from 'supertest'
import app from '../server'
import config from '../config/config'
import { cleanData, connect, disconnect } from '../__helper__/mongodb.server.test.helper'

describe('Sequence Controller', () => {
  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanData()
  })

  afterAll(async () => {
    await disconnect()
  })

  describe('GET /api/v1/sequence', () => {
    let response: Response

    beforeAll(async () => {
      const data = { name: 'John' }
      const validToken = jwt.sign(data, config.development.auth.tokenSecret)
      response = await request(app)
        .get('/api/v1/sequence')
        .set('Authorization', `Bearer ${validToken}`)
    })

    it('should give a 404 status if the database is empty', () => {
      expect(response.status).toBe(404)
    })
    it('should return the subsequences and original sequence if the database is populated', async () => {
      const data = { name: 'John' }
      const validToken = jwt.sign(data, config.development.auth.tokenSecret)
      await request(app)
        .post('/api/v1/sequence')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ sequence: [1, 2] })

      const response = await request(app)
        .get('/api/v1/sequence')
        .set('Authorization', `Bearer ${validToken}`)

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('originalSequence')
      expect(response.body).toHaveProperty('subSequences')
    })
  })
  describe('POST /api/v1/sequence', () => {
    let validToken: string

    beforeAll(() => {
      const data = { name: 'John' }
      validToken = jwt.sign(data, config.development.auth.tokenSecret)
    })

    it('should give a 400 if not sequence is provided', async () => {
      const response = await request(app)
        .post('/api/v1/sequence')
        .set('Authorization', `Bearer ${validToken}`)
      expect(response.status).toBe(400)
    })
    it('should give a 201 if sequence is provided', async () => {
      const response = await request(app)
        .post('/api/v1/sequence')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ sequence: [1, 2] })
      expect(response.status).toBe(201)
    })
    it('should give a 400 if not sequence is malformed', async () => {
      const response = await request(app)
        .post('/api/v1/sequence')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ sequence: 1 })
      expect(response.status).toBe(400)
    })
  })
})
