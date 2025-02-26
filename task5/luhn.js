
export const valid = (str) => {
  if (!str || str.trim().length <= 1) return false;
  if (str === '0') return false;

  // str = str.replace(/\s+/g, ''); // удаляем все пробелы из строки
  // str = str.split('').map(Number);

  // удаляем все пробелы из строки и преобразуем в числа
  str = Array.from(str).filter((str, i) => {
    if (str !== ' ') {
      console.log(str.charCodeAt());
      return true;
    }
  }
  ).map(Number)
  // console.log('str: ', str);


  let sum = 0;

  str.reverse().forEach((currentItem, i) => {
    console.log('i: ', i);
    // Если это вторая цифра, удваиваем 
    if (i % 2 === 1) {
      currentItem *= 2;

      // Если результат больше 9, вычитаем 9
      if (currentItem > 9) {
        currentItem -= 9;
      }
    }
    sum += currentItem;
  });

  // for (let i = str.length - 1; i >= 0; i--) {
  //   console.log('i: ', i);
  //   let currentItem = str[i];

  //   // Если это вторая цифра, удваиваем
  //   if ((str.length - i) % 2 === 0) {
  //     currentItem *= 2;

  //     // Если результат больше 9, вычитаем 9
  //     if (currentItem > 9) {
  //       currentItem -= 9;
  //     }
  //   }
  //   sum += currentItem;
  // }

  return sum % 10 === 0;
};


console.log(valid('   0213')); // false
// console.log(valid('0000     0')); // true
// console.log(valid('059')); // true
// console.log(valid('123')); // false