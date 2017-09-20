import React from 'react';
import { mount } from 'enzyme';
import { Toggle } from '../src';

const Example = () => (
  <Toggle>
    <div toggle>Click this to swap the content</div>

    <div off>Click the toggle above to turn it on!</div>
    <div on>Toggle is now on!</div>
    <p>this is rendered too</p>
  </Toggle>
);

test('should render with the off div', () => {
  const wrapper = mount(<Example />);

  expect(
    wrapper
      .find('div')
      .last()
      .props().children
  ).toEqual('Click the toggle above to turn it on!');

  expect(wrapper.find('p').props().children).toEqual('this is rendered too');
});

test('should render with the off div', () => {
  const wrapper = mount(<Example />);

  wrapper
    .find('div')
    .first()
    .simulate('click');

  expect(
    wrapper
      .find('div')
      .last()
      .props().children
  ).toEqual('Toggle is now on!');
});
