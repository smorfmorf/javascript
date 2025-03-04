

export const transpose = (input) => {
  if (!Array.isArray(input) || input.length === 0) {
    return []
  }

  const maxLength = Math.max(...input.map(line => line.length))
  const paddedInput = input.map(line => line.padEnd(maxLength, ' '))

  const res = []

  for (let i = 0; i < maxLength; i++) {
    let row = ''
    for (let j = 0; j < paddedInput.length; j++) {
      row += paddedInput[j][i]
    }
    res.push(row)
  }

  return res
};
