import { Router } from 'express'
import { createSequence, getSubSequences } from '../controllers/sequence.controllers'

const SequenceRoutes = Router()

SequenceRoutes
  .post('/', createSequence)
  .get('/', getSubSequences)

export default SequenceRoutes
