

export class InvalidInputError extends Error {
  constructor(direction) {
    super(`Invalid direction: ${direction}`);
  }

}

export class Robot {
  constructor() {
    this.directions = ["north", "east", "south", "west"];
    this.x = 0;
    this.y = 0;
    this.direction = "north";
  }

  get bearing() {
    return this.direction;
  }

  get coordinates() {
    return [this.x, this.y];
  }


  turnRight() {
    if (this.directions) {
      this.direction = this.directions[(this.directions.indexOf(this.direction) + 1) % 4];
    } else {
      throw new Error('this.directions is undefined');
    }
  }

  turnLeft() {

    this.direction = this.directions[(this.directions.indexOf(this.direction) - 1 + 4) % 4];
    // const currentIndex = this.directions.indexOf(this.direction);
    // const newIndex = (currentIndex - 1 + 4) % 4;
    // this.direction = this.directions[newIndex];
  }

  place({ x, y, direction }) {
    if (!this.directions.includes(direction)) throw new InvalidInputError(direction)

    this.x = x
    this.y = y
    this.direction = direction

  }

  advance() {
    if (this.direction === 'north') this.y++;
    if (this.direction === 'south') this.y--;
    if (this.direction === 'east') this.x++;
    if (this.direction === 'west') this.x--;

  }

  evaluate(instructions) {

    for (const instruction of instructions) {
      if (instruction === 'R') this.turnRight();
      if (instruction === 'L') this.turnLeft();
      if (instruction === 'A') this.advance();
    }
  }
}
