// Liskov Substitution Principle ...Принцип подстановки Liskov

// class Person {
//
// }
//
// class Member extends Person {
//   access() {
//     console.log('У тебя есть доступ');
//   }
// }
//
// class Frontend extends Member {
//
//   access() {
//     console.log('Frontend');
//   }
// }
//
// class Backend extends Member {
//   access() {
//     console.log('Backend');
//   }
// }
//
// class PersonFromDifrentCompany extends Person {
//   access() {
//   }
// }
//
// const person = new Person();
// const frontend = new Frontend();
// frontend.access();
// const backend = new Backend();
// backend.access();
// const personFromDifrentCompany = new PersonFromDifrentCompany();
// personFromDifrentCompany.access();
//======================================

class Component {
  getTemplate() {
    return `
      <div>
        <h1>Component</h1>
      </div>
    `;
  }
}

class HeaderComponent extends Component {
  onInit() {

  }
}

class FooterComponent extends Component {
  afterInit() {

  }
}

class HOC extends Component {
  render() {
    throw new Error('Not implemented');
  }

  wrapComponent(component) {
    console.log('wrapper component');
  }
}