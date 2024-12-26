/**
 * Base class representing a Computer.
 * @class
 */
class Computer {
  /**
   * Returns the description of the computer.
   * @returns {string} Description of the computer.
   */
  description() {
    return "computer";
  }
}

/**
 * Abstract decorator class for Computer.
 * @class
 * @extends {Computer}
 */
class ComputerDecorator extends Computer {
  computer;
  /**
   * @param {Computer} computer - The computer to be decorated.
   * @throws {TypeError} If instantiated directly.
   */
  constructor(computer) {
    super();
    if (new.target === ComputerDecorator) {
      throw new TypeError(
        "Cannot construct ComputerDecorator instances directly"
      );
    }
    this.computer = computer;
  }

  /**
   * Returns the description of the decorated computer.
   * This method must be implemented by subclasses.
   * @returns {string} Description of the decorated computer.
   * @throws {Error} If not implemented by subclass.
   */
  description() {
    // return this.computer.description();
    throw new Error("Method 'description()' must be implemented.");
  }
}

/**
 * Concrete decorator class for adding a disk to a computer.
 * @class
 * @extends {ComputerDecorator}
 */
class Disk extends ComputerDecorator {
  /**
   * @param {Computer} computer - The computer to be decorated with a disk.
   */
  constructor(computer) {
    super(computer);
  }

  /**
   * Returns the description of the computer with a disk.
   * @returns {string} Description of the computer with a disk.
   */
  description() {
    return this.computer.description() + " and a disk";
  }
}

/**
 * Concrete decorator class for adding a monitor to a computer.
 * @class
 * @extends {ComputerDecorator}
 */
class Monitor extends ComputerDecorator {
  /**
   * @param {Computer} computer - The computer to be decorated with a monitor.
   */
  constructor(computer) {
    super(computer);
  }

  /**
   * Returns the description of the computer with a monitor.
   * @returns {string} Description of the computer with a monitor.
   */
  description() {
    return this.computer.description() + " and a monitor";
  }
}

/**
 * Concrete decorator class for adding a printer to a computer.
 * @class
 * @extends {ComputerDecorator}
 */
class Printer extends ComputerDecorator {
  /**
   * @param {Computer} computer - The computer to be decorated with a printer.
   */
  constructor(computer) {
    super(computer);
  }

  /**
   * Returns the description of the computer with a printer.
   * @returns {string} Description of the computer with a printer.
   */
  description() {
    return this.computer.description() + " and a printer";
  }
}

let computer = new Computer();
console.log(computer.description());

computer = new Disk(computer);
console.log(computer.description());

computer = new Monitor(computer);
console.log(computer.description());

computer = new Printer(computer);
console.log(computer.description());
