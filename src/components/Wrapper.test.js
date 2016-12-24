import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Wrapper from './Wrapper';

class Mock extends React.Component {
  static contextTypes = {
    ionPlatform: React.PropTypes.object,
  }

  render() {
    console.log(this.context.ionPlatform);
    return <div>{this.context.ionPlatform.test}</div>;
  }
}

describe('<Wrapper />', () => {
  it('renders its children', () => {
    const wrapper = shallow(
      <Wrapper>
        <div>Test</div>
      </Wrapper>
    );

    expect(wrapper.text()).to.contain('Test');
  });

  it('renders its children with context', () => {
    const wrapper = mount(
      <Wrapper>
        <Mock />
      </Wrapper>,
      { context: { ionPlatform: { test: 'Test' } } }
    );

    expect(wrapper.text()).to.contain('Test');
  });
});
