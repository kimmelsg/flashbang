import React from 'react';
import { mount } from 'enzyme';
import { AsyncAction } from '../src';

const wait = time => new Promise(resolve => setTimeout(resolve, time));

const Example = () => (
  <AsyncAction
    onClick={() => new Promise(resolve => setTimeout(resolve, 10))}
    before={<div>Create</div>}
    during={<div>Creating...</div>}
    after={<span>Created!</span>}
  />
);

test('should render with before element', () => {
  const wrapper = mount(<Example />);

  expect(wrapper.find('div').props().children).toEqual('Create');
});

test('should render loading and after on click', async () => {
  const wrapper = mount(<Example />);

  wrapper.find('div').simulate('click');

  await wait(5);
  expect(wrapper.html()).toEqual('<div>Creating...</div>');

  await wait(5);
  expect(wrapper.html()).toEqual('<span>Created!</span>');
});
