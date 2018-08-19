import { observable, action } from 'mobx';

export default class SampleStore {
  @observable
  counter = {
    value: 0
  };

  @action
  tick() {
    this.counter.value += 1;
  }
}
