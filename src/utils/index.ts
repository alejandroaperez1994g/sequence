export function generateSubsequences<T> (seq: T[]): T[][] {
  const result: T[][] = []

  function recurse (curr: T[], remaining: T[]) {
    if (curr.length > 0) {
      result.push(curr)
    }
    for (let i = 0; i < remaining.length; i++) {
      recurse(curr.concat(remaining[i]), remaining.slice(i + 1))
    }
  }

  recurse([], seq)
  return result.sort((a, b) => a.length - b.length)
}
