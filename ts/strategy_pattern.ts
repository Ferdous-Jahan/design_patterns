// interface IGoAlgorithm {
//   go(): void;
// }

// class GoByDriving implements IGoAlgorithm {
//   go() {
//     console.log("Now I am driving");
//   }
// }

// class GoByFlying implements IGoAlgorithm {
//   go() {
//     console.log("Now I am flying");
//   }
// }

// class GoByFlyingFast implements IGoAlgorithm {
//   go() {
//     console.log("Now I am flying fast");
//   }
// }

// abstract class Vehicle {
//   private goAlgorithm: IGoAlgorithm;

//   constructor(goAlgorithm: IGoAlgorithm) {
//     this.goAlgorithm = goAlgorithm;
//   }

//   go() {
//     this.goAlgorithm.go();
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super(new GoByDriving());
//   }
// }

// class Helicopter extends Vehicle {
//   constructor() {
//     super(new GoByFlying());
//   }
// }

// class Jet extends Vehicle {
//   constructor() {
//     super(new GoByFlyingFast());
//   }
// }

// const car = new Car();
// car.go();
// const helicopter = new Helicopter();
// helicopter.go();
// const jet = new Jet();
// jet.go();
