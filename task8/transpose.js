export const transpose = (input) => {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }

  const maxLength = Math.max(...input.map(line => line.length));
  const res = [];

  for (let i = 0; i < maxLength; i++) {
    let row = '';
    let lastNonSpace = -1; // Запоминаем позицию последнего значащего символа

    for (let j = 0; j < input.length; j++) {
      if (i < input[j].length) {
        row += input[j][i];
        lastNonSpace = row.length; // Обновляем позицию последнего значащего символа
      } else {
        row += ' ';
      }
    }

    res.push(row.slice(0, lastNonSpace)); // Обрезаем строку до последнего значащего символа
  }

  return res;
};
