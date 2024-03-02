class CoffeeMachine {
  #waterAmount = 0;

  constructor(power) {
    this.power = power;
  }

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    this.#waterAmount = value;
    return this.#waterAmount;
  }
  createCoffee() {
    if (this.waterAmount > 200) {
      console.log('Кофе готовится');
    }else {
      console.log('Недостаточно воды');
    }
  }
}

const coffeeMachine = new CoffeeMachine(100);

console.log(coffeeMachine.waterAmount=300);
coffeeMachine.createCoffee()
//false
//false
//true
//false
//false
//false
//true
//true
//Funtion.prototype
//Number.prototype

// class Man {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// let man = new Man('Alex');

// class Animal {
//   static printName="This class for Animal"
//   static staticMethod() {
//     console.log('static method');
//   }
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }
//
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}`);
//   }
//
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит`);
//   }
// }
//
// class Tiger extends Animal {
//   constructor(name, ago) {
//     super(name);
//     this.ago = ago;
//   }
//
//   atack() {
//     console.log(`${this.name} бьет`);
//   }
// }
//
// const tiger = new Tiger('Tiger',5);
// tiger.run(50);
// tiger.stop();
// tiger.atack();
// console.log(Tiger.printName)
// Tiger.staticMethod()


// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }
//
//   method1() {
//     console.log('method1');
//   }
//
//   printName() {
//     console.log(this.name);
//   }
// }
//
// let user1 = new MyClass('Ivan');
// user1.printName()
// class Car {
//   constructor(brand) {
//     this.brand = brand;
//     this.gasTank = 100;
//     this.zapravka = [];
//   }
//
//   getGas() {
//     this.gasTank += 10;
//     const stamp = Date.now();
//     const time = new Date(stamp);
//     this.zapravka.push(time.toString());
//     return this.gasTank;
//   }
//
//   drive() {
//     this.gasTank -= 10;
//     return this.gasTank;
//   }
// }
//
// class HybridCar extends Car {
//   constructor(brand) {
//     super(brand);
//     this.hybrid = true;
//   }
// }
//
// const toyota = new HybridCar('toyota');
// console.log(toyota);
// const audi = new Car('audi');
// console.log(audi.drive());
// console.log(audi.drive());
// console.log(audi.drive());
// console.log(audi.drive());
// console.log(audi.getGas());
// console.log(audi.zapravka);


// function CarConstr(brand, color) {
//   this.brand = brand;
//   this.color = color;
// }
//
// const nisan = new CarConstr('Nisan', 'red');
// const bmw = new CarConstr('BMW', 'red');
// console.log(bmw);
// CarConstr.prototype.start = function () {
//   console.log(`${this.brand} start`);
// };
// CarConstr.prototype.stop = function () {
//   console.log(`${this.brand} stop`);
// };
// bmw.start();
// nisan.start();
// nisan.stop();
//
// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//
//   start() {
//     console.log(`${this.brand} start`);
//   }
//
//   stop() {
//     console.log(`${this.brand} stop`);
//   }
//
//   static discount() {
//     console.log('Общая скидка 10%');
//   }
//
//   set rating(value) {
//     this._rating = value;
//   }
//   get rating() {
//     return this._rating
//   }
// }
//
// const audi = new Car('audi', 'red');
// const tesla = new Car('tesla', 'red');
// tesla.start();
// tesla.stop();
// Car.discount();
// audi.rating=10
// console.log(audi);
// console.log(tesla);
//
//
//
