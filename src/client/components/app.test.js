import React from 'react';

import App from './app';
import SampleStore from '../stores/sample-store';

const sampleStore = new SampleStore();

describe('<App />', () => {
  it('renders the <App /> component', () => {
    const wrapper = shallow(<App sampleStore={sampleStore} />).dive();

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.state().greet).toBeDefined();
    expect(wrapper.instance().props.sampleStore).toBeInstanceOf(SampleStore);
  });
});
