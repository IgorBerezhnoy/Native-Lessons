// Open closed principle ...Принцип открытого закрытого
class Shape {
  getArea() {
    throw new Error('Not implemented');
  }
}

class Square extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}


class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  calculateArea() {
    debugger
    return this.shapes.reduce((acc, item) => acc + item.getArea(), 0);
  }
}
const calc = new AreaCalculator([
  new Circle(9),
  new Circle(9),
  new Square(9, 9),
]);
console.log(calc.calculateArea());