export class Robot {
  // В них можно делать какие-то общие данные для всех объектов. Основная суть статических методов и свойств в том, что они привязаны не к конкретным экземплярам класса, а к самому классу.
  static usedNames = new Set();
  constructor() {
    // свойство экземпляра класса (Привязано к конкретному объекту)
    this.lvl = 0;

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
    // Robot.usedNames.clear()
  }
}




//