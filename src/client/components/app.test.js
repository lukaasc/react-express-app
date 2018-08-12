import React from 'react';

import App from './app';

describe('<App />', () => {
  it('renders the <App /> component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBeTruthy();
  });
});
