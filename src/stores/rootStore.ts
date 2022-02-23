import { UserStore } from './userStore';

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}

export default new RootStore();
