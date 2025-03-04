



export function commands(number) {

  const actions = [
    "wink",                     // 00001 -> 1
    "double blink",             // 00010 -> 2
    "close your eyes",          // 00100 -> 4
    "jump"                      // 01000 -> 8
  ];


  const result = []
  const binaryStr = number.toString(2).padStart(5, '0')
  console.log('binaryStr: 00001', binaryStr);

  for (let i = 0; i < actions.length - 1; i++) {
    if (binaryStr[4 - i] === '1') {
      result.push(actions[i])
    }
  }


  if (binaryStr[0] === '1') {
    return result.reverse()
  }



  return result
}

const res = commands(31)
console.log('res: ', res);