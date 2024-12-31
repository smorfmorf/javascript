

export class BankAccount {
  constructor(name) {
    this.name = name;
    this.balanceUser = 0;
    this.isOpen = false;
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.balanceUser = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      throw new ValueError();
    }
  }

  deposit(amount) {
    if (this.isOpen && amount > 0) {
      this.balanceUser += amount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if (this.isOpen && this.balanceUser >= amount && amount > 0) {
      this.balanceUser -= amount;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.isOpen && this.balanceUser >= 0) {
      return this.balanceUser;
    } else {
      throw new ValueError();

    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}


const account = new BankAccount('mazaka');
console.log('account: ', account);