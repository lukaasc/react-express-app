import StoreInitializer from '../stores';
import SampleStore from '../stores/sample-store';

let sampleStore;

describe('StoreInitializer', () => {
  it('Initializes the stores', () => {
    const stores = StoreInitializer.initialize();

    expect(stores).toBeDefined();
    expect(stores.sampleStore).toBeInstanceOf(SampleStore);
  });
});

describe('SampleStore', () => {
  beforeEach(() => {
    sampleStore = new SampleStore();
  });

  it('Initializes the counter in 0', () => {
    expect(sampleStore.counter).toBe(0);
  });

  it('Ticks counter', () => {
    sampleStore.tick();
    expect(sampleStore.counter).toBe(1);
    sampleStore.tick();
    sampleStore.tick();
    expect(sampleStore.counter).toBe(3);
  });
});
