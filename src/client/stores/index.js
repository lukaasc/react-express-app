import SampleStore from './sample-store';

export default class StoreInitializer {
  static initialize() {
    return {
      sampleStore: new SampleStore()
    };
  }
}
