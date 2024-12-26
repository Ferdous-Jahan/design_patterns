/**
 * Interface for the go algorithm
 * @interface
 */
class IGoAlgorithm {
  /**
   * Method to be implemented by subclasses
   * @abstract
   */
  go() {}
}

/**
 * Class to implement go algorithm for driving
 * @class
 * @implements {IGoAlgorithm}
 */
class GoByDriving extends IGoAlgorithm {
  /**
   * @override
   */
  go() {
    console.log("Now I am driving");
  }
}

/**
 * Class to implement go algorithm for flying
 * @class
 * @implements {IGoAlgorithm}
 */
class GoByFlying extends IGoAlgorithm {
  /**
   * @override
   */
  go() {
    console.log("Now I am flying");
  }
}

/**
 * Class to implement go algorithm for flying fast
 * @class
 * @implements {IGoAlgorithm}
 */
class GoByFlyingFast extends IGoAlgorithm {
  /**
   * @override
   */
  go() {
    console.log("Now I am flying fast");
  }
}

/**
 * Class for vehicle
 * @class
 * @abstract
 */
class Vehicle {
  goAlgorithm;
  constructor() {
    if (new.target === Vehicle) {
      throw new TypeError("Cannot construct Vehicle instances directly");
    }
  }

  /**
   * Setter for goAlgorithm
   * @param {IGoAlgorithm} goAlgorithm
   */
  setGoAlgorithm(goAlgorithm) {
    this.goAlgorithm = goAlgorithm;
  }

  /**
   * Delegates the go action to the go algorithm
   */
  go() {
    this.goAlgorithm.go();
  }
}

/**
 * Class for car
 * @class
 * @extends {Vehicle}
 */
class Car extends Vehicle {
  constructor() {
    super();
    this.setGoAlgorithm(new GoByDriving());
  }
}

/**
 * Class for Helicopter
 * @class
 * @extends {Vehicle}
 */
class Helicopter extends Vehicle {
  constructor() {
    super();
    this.setGoAlgorithm(new GoByFlying());
  }
}

/**
 * Class for Jet
 * @class
 * @extends {Vehicle}
 */
class Jet extends Vehicle {
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

const car = new Car();
car.go();

const helicopter = new Helicopter();
helicopter.go();

const jet = new RealJet();