export class Robot {

  // В них можно делать какие-то общие данные для всех объектов. Основная суть статических методов и свойств в том, что они привязаны не к конкретным экземплярам класса, а к самому классу.
  static usedNames = new Set();
  constructor() {
    // свойство экземпляра класса (Привязано к конкретному объекту)
    this.reset();
  }

  reset() {
    this._name = Robot.generateName();
  }

  static generateName() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";


    let name; //пустое поле false

    // пока имя есть в Set делаем другое
    while (!name || Robot.usedNames.has(name)) {
      const letter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
      const letter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
      const number1 = numbers[Math.floor(Math.random() * numbers.length)];
      const number2 = numbers[Math.floor(Math.random() * numbers.length)];
      const number3 = numbers[Math.floor(Math.random() * numbers.length)];
      name = `${letter1}${letter2}${number1}${number2}${number3}`;
    }

    Robot.usedNames.add(name);

    return name
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error("Robot name cannot be modified");
  }

  static releaseNames() {
    Robot.usedNames.clear()
  }
}

const robot = new Robot()
const robot2 = new Robot()

console.log('robot: ', robot);
console.log('Robot: ', Robot.usedNames);

class Robot {
  // В статических полях можно делать какие-то общие данные. Основная суть статических методов и свойств в том, что они привязаны не к конкретным экземплярам класса, а к самому классу.
  static usedNames = new Set();

  // lvl и name - явл свойствами экземпляра класса 
  lvl = '10'

  constructor() {
    this.name = new Date();
    Robot.arrNames.add(this.name)
  }
}


// const names = []
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789"


// function generateName() {

//   let letter1 = Math.floor(Math.random() * alphabet.length)
//   let letter2 = Math.floor(Math.random() * alphabet.length)

//   let number1 = Math.floor(Math.random() * numbers.length)
//   let number2 = Math.floor(Math.random() * numbers.length)
//   let number3 = Math.floor(Math.random() * numbers.length)


//   const name = (alphabet[letter1] + alphabet[letter2] + numbers[number1] + numbers[number2] + numbers[number3]).toUpperCase()

//   if (!names.includes(name)) {
//     names.push(name)
//   } else {
//     console.log('Данное имя уже есть');
//   }

//   console.log(name);
// }

// for (let i = 0; i < 1000; i++) {
//   generateName()

// }

// console.log(names)


// class Robot {
//   constructor() {
//     if (!Robot.usedNames) Robot.usedNames = new Set();
//     this.name = this.generateName();
//   }

//   generateName() {


//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";

//     let name;
//     do {
//       // Случайные буквы и цифры
//       const letter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
//       const letter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
//       const number1 = numbers[Math.floor(Math.random() * numbers.length)];
//       const number2 = numbers[Math.floor(Math.random() * numbers.length)];
//       const number3 = numbers[Math.floor(Math.random() * numbers.length)];

//       // Генерация имени
//       name = `${letter1}${letter2}${number1}${number2}${number3}`;
//     } while (Robot.usedNames.has(name)); // Проверка уникальности

//     return name
//   }

//   static info() {
//     console.log('usedNames: ', Robot.usedNames);
//   }

// }

// const robot = new Robot();
// const robot2 = new Robot();


// Robot.info();