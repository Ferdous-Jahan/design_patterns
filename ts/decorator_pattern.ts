class Computer {
  description(): string {
    return "computer";
  }
}

abstract class ComputerDecorator extends Computer {
  protected computer: Computer;

  constructor(computer: Computer) {
    super();
    if (this.constructor === ComputerDecorator) {
      throw new TypeError(
        "Cannot instantiate abstract class 'ComputerDecorator'"
      );
    }
    this.computer = computer;
  }

  abstract description(): string;
}

class Disk extends ComputerDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  description(): string {
    return this.computer.description() + " and a disk";
  }
}

class Monitor extends ComputerDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  description(): string {
    return this.computer.description() + " and a monitor";
  }
}

class Printer extends ComputerDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  description(): string {
    return this.computer.description() + " and a printer";
  }
}

// Usage
let computer: Computer = new Computer();
console.log(computer.description()); // Output: computer

computer = new Disk(computer);
console.log(computer.description()); // Output: computer and a disk

computer = new Monitor(computer);
console.log(computer.description()); // Output: computer and a disk and a monitor

computer = new Printer(computer);
console.log(computer.description()); // Output: computer and a disk and a monitor and a printer
