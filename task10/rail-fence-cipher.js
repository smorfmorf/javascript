export function encode(text, rails) {
  if (rails <= 1) return text;

  const fence = Array.from({ length: rails }, () => []);
  let rail = 0, direction = 1;

  for (const char of text) {
    fence[rail].push(char);
    rail += direction;
    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  return fence.flat().join('');
}

export function decode(text, rails) {
  if (rails <= 1) return text;

  const fence = Array.from({ length: rails }, () => Array(text.length).fill(null));
  let rail = 0, direction = 1;

  for (let i = 0; i < text.length; i++) {
    fence[rail][i] = '?';
    rail += direction;
    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  let index = 0;
  for (let r = 0; r < rails; r++) {
    for (let c = 0; c < text.length; c++) {
      if (fence[r][c] === '?' && index < text.length) {
        fence[r][c] = text[index++];
      }
    }
  }

  rail = 0;
  direction = 1;
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += fence[rail][i];
    rail += direction;
    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  return result;
}
