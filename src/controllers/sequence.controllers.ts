import { type Request, type Response } from 'express'
import { generateSubsequences } from '../utils'
import sequenceModel from '../models/sequence.model'

export const createSequence = async (req: Request, res: Response) => {
  const { sequence } = req.body as { sequence: string[] }

  if (sequence === undefined || !Array.isArray(sequence)) return res.status(400).send({ message: 'Bad Request: Sequence is required' })
  try {
    const subSequence = generateSubsequences(sequence)

    await sequenceModel
      .findOneAndUpdate({}, { subsequence: subSequence }, { upsert: true, new: true, setDefaultsOnInsert: true })
    res.status(201).send({ message: 'Sequence created' })
  } catch (error) {
    res.status(500).send({ message: (error as Error).message })
  }
}

export const getSubSequences = async (_: Request, res: Response) => {
  try {
    const subSequences = await sequenceModel.find({})
    if (subSequences.length === 0) return res.status(404).send({ message: 'Not Found: No sequence found' })
    const originalSequence = subSequences[0].subsequence[subSequences[0].subsequence.length - 1]
    res.status(200).send({ originalSequence, subSequences })
  } catch (error) {
    res.status(500).send({ message: (error as Error).message })
  }
}
