import React from 'react';
import { shallow } from 'enzyme';

import AccountBalance from '.';

describe('AccountBalance Snapshot', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AccountBalance title={'Account balance'} amount={1000} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
