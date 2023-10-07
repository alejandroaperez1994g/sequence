import { model, Schema } from 'mongoose'

interface ISequence {
  subsequence: number[][]
  timestamps: Date
}

const sequenceSchema = new Schema<ISequence>({
  subsequence: {
    type: [[Number]],
    required: true
  }
}, {
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: false }
})

const sequenceModel = model<ISequence>('Sequence', sequenceSchema)

export default sequenceModel
