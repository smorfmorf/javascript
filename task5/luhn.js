//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  if (!str || str.trim().length <= 1) return false;
  if (str === '0') return false;

  str = str.replace(/\s+/g, '');
  str = str.split('').map(Number);


  let sum = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    let currentItem = str[i];

    // Если это вторая цифра, удваиваем
    if ((str.length - i) % 2 === 0) {
      currentItem *= 2;

      // Если результат больше 9, вычитаем 9
      if (currentItem > 9) {
        currentItem -= 9;
      }
    }

    sum += currentItem;
  }

  return sum % 10 === 0;
};
console.log(valid(' 0')); // false
console.log(valid('0000     0')); // true
console.log(valid('059')); // true
console.log(valid('123')); // false