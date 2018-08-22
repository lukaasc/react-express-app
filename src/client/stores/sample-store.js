import { observable, action } from 'mobx';

export default class SampleStore {
  @observable
  counter = 0;

  @action
  tick() {
    this.counter++;
  }
}
