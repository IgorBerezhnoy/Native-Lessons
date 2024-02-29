// //Interface segregation principle ...Принцип разделения интерфейсов
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   walk() {
//     console.log('I can walk');
//   }
//
//   swim() {
//     console.log('I can swim');
//   }
//
//   fly() {
//     console.log('I can fly');
//   }
// }
//
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }


class Walker {
  walk() {
    console.log('I can walk');
  }
}

class Swimmer {
  swim() {
    console.log('I can swim');
  }
}

class Flyer {
  fly() {
    console.log('I can fly');
  }
}
