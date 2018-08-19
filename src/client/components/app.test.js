import React from 'react';

import App from './app';
import SampleStore from '../stores/sample-store';

const sampleStore = new SampleStore();

describe('<App />', () => {
  it('renders the <App /> component', () => {
    const wrapper = shallow(<App sampleStore={sampleStore} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
