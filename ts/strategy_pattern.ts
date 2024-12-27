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
  private goAlgorithm: IGoAlgorithm;

  constructor(goAlgorithm: IGoAlgorithm) {
    this.goAlgorithm = goAlgorithm;
  }

  setGoAlgorithm(goAlgorithm: IGoAlgorithm) {
    this.goAlgorithm = goAlgorithm;
  }

  go() {
    this.goAlgorithm.go();
  }
}

class Car extends Vehicle {
  constructor() {
    super(new GoByDriving());
  }
}

class Helicopter extends Vehicle {
  constructor() {
    super(new GoByFlying());
  }
}

class Jet extends Vehicle {
  constructor() {
    super(new GoByFlyingFast());
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
