import { generateSubsequences } from '../index'

describe('generateSubsequences function', () => {
  it('should generate all subsequences of a given array', () => {
    const input = [1, 2, 3]
    const expectedOutput = [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    const result = generateSubsequences(input)

    expectedOutput.forEach(subseq => {
      expect(result).toContainEqual(subseq)
    })

    expect(result.length).toBe(expectedOutput.length)
  })
  it('should return an empty array when input is an empty array', () => {
    const input: number[] = []
    const expectedOutput: number[] = []
    const result = generateSubsequences(input)

    expect(result).toEqual(expectedOutput)
  })
})
