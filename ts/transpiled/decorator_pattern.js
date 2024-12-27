"use strict";
class Computer {
    description() {
        return "computer";
    }
}
class ComputerDecorator extends Computer {
    constructor(computer) {
        super();
        if (this.constructor === ComputerDecorator) {
            throw new TypeError("Cannot instantiate abstract class 'ComputerDecorator'");
        }
        this.computer = computer;
    }
}
class Disk extends ComputerDecorator {
    constructor(computer) {
        super(computer);
    }
    description() {
        return this.computer.description() + " and a disk";
    }
}
class Monitor extends ComputerDecorator {
    constructor(computer) {
        super(computer);
    }
    description() {
        return this.computer.description() + " and a monitor";
    }
}
class Printer extends ComputerDecorator {
    constructor(computer) {
        super(computer);
    }
    description() {
        return this.computer.description() + " and a printer";
    }
}
// Usage
let computer = new Computer();
console.log(computer.description()); // Output: computer
computer = new Disk(computer);
console.log(computer.description()); // Output: computer and a disk
computer = new Monitor(computer);
console.log(computer.description()); // Output: computer and a disk and a monitor
computer = new Printer(computer);
console.log(computer.description()); // Output: computer and a disk and a monitor and a printer
