import { observable, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { RootStore } from './rootStore';

export interface IUserStore {
  id: string;
  name?: string;
  avatar?: string;
}

export class UserStore implements IUserStore {
  @observable id = uuidv4();
  @observable firstName = '';
  @observable middleName = '';
  @observable lastName = '';
  @observable avatar = '';

  constructor(private readonly rootStore: RootStore) {
  }
}
