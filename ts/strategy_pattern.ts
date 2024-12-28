interface IGoAlgorithm {
  go(): void;
}

class GoByDriving implements IGoAlgorithm {
  go() {
    console.log("Now I am driving");
  }
}

class GoByFlying implements IGoAlgorithm {
  go() {
    console.log("Now I am flying");
  }
}

class GoByFlyingFast implements IGoAlgorithm {
  go() {
    console.log("Now I am flying fast");
  }
}

abstract class Vehicle {
  constructor() {}

  private goAlgorithm!: IGoAlgorithm; // This is not optional. but If I don't make it optional, I need to initialize it here or in the constructor. I will look for a better way to do this.

  setGoAlgorithm(goAlgorithm: IGoAlgorithm) {
    this.goAlgorithm = goAlgorithm;
  }

  go() {
    this.goAlgorithm.go();
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.setGoAlgorithm(new GoByDriving());
  }
}

class Helicopter extends Vehicle {
  constructor() {
    super();
    this.setGoAlgorithm(new GoByFlying());
  }
}

abstract class Jet extends Vehicle {
  constructor() {
    super();
  }
}

class RealJet extends Jet {
  constructor() {
    super();
    this.setGoAlgorithm(new GoByDriving());
    this.go();

    this.setGoAlgorithm(new GoByFlyingFast());
    this.go();

    this.setGoAlgorithm(new GoByDriving());
    this.go();
  }
}

// Usage
const car = new Car();
car.go(); // Output: Now I am driving

const helicopter = new Helicopter();
helicopter.go(); // Output: Now I am flying

const jet = new RealJet(); // Output: Now I am driving, Now I am flying fast, Now I am driving
