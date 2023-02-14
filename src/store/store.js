import { makeAutoObservable } from 'mobx';

class Store {
  user = {};

  constructor() {
    makeAutoObservable(this);
  }

  saveUser(user) {
    this.user = user;
  }
}

export default new Store();
