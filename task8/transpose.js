//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (!Array.isArray(input) || input.length === 0) {
    return []
  }

  const maxLength = Math.max(...input.map(line => line.length))
  const paddedInput = input.map(line => line.padEnd(maxLength, ' '))

  const res = []

  for (let i = 0; i < maxLength; i++) {
    const row = ''
    for (let j = 0; j < paddedInput.length; j++) {
      row += paddedInput[j][i]
    }
    res.push(row.trimEnd())
  }
};
