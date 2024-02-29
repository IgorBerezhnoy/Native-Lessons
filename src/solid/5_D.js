//Dependency inversion principle ...Принцип инверсии зависимостей

class Fetcher {
  request(url) {
    // return fetch(url).then(r => r.json());
    return Promise.resolve('some data');
  }
}

class LocalStorage {
  getData() {
    return 'some data';
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetcher();
  }

  clientGet() {
    this.fetch.request('vk.com');
  }

  get() {

  }
}

class Database {
  constructor() {
    // this.fetch = new Fetcher();
    this.localStorage = new LocalStorage();
  }

  getData() {
    // return this.fetch.request('vk.com');
    return this.localStorage.getData('vk.com');
  }
}

const db = new Database();
console.log(db.getData());