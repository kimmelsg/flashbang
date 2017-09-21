import React from 'react';
import { mount } from 'enzyme';
import { Paginate } from '../src';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

test('should render null if no pages present', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Paginate page={1} createURL={page => `?page=${page}`} />
    </MemoryRouter>
  );

  expect(wrapper.html()).toEqual(null);
});

test('defaults page to 1', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Paginate pages={5} createURL={page => `?page=${page}`} />
    </MemoryRouter>
  );

  expect(
    wrapper
      .find('.flashbang-p__disabled')
      .first()
      .props().to
  ).toEqual('?page=1');
});

test('should render with back button disabled', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Paginate page={1} pages={25} createURL={page => `?page=${page}`} />
    </MemoryRouter>
  );

  expect(
    wrapper
      .find('.flashbang-p__disabled')
      .first()
      .props().to
  ).toEqual('?page=1');

  expect(
    wrapper
      .find(Link)
      .last()
      .props().to
  ).toEqual('?page=2');

  expect(wrapper.find('li').length).toEqual(7);
});

test('should render with forward button disabled', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Paginate page={25} pages={25} createURL={page => `?page=${page}`} />
    </MemoryRouter>
  );

  expect(
    wrapper
      .find('.flashbang-p__disabled')
      .first()
      .props().to
  ).toEqual('?page=25');

  expect(
    wrapper
      .find(Link)
      .first()
      .props().to
  ).toEqual('?page=24');

  expect(wrapper.find('li').length).toEqual(7);
});

test('should render 4 before and after page', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Paginate page={12} pages={25} createURL={page => `?page=${page}`} />
    </MemoryRouter>
  );

  expect(
    wrapper
      .find(Link)
      .first()
      .props().to
  ).toEqual('?page=11');

  expect(
    wrapper
      .find(Link)
      .last()
      .props().to
  ).toEqual('?page=13');

  expect(wrapper.find('li').length).toEqual(11);
});

test('should scroll to top on link click', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Paginate page={12} pages={25} createURL={page => `?page=${page}`} />
    </MemoryRouter>
  );

  global.window.scrollTo = jest.fn();

  expect(
    wrapper
      .find(Link)
      .last()
      .simulate('click')
  );

  expect(
    wrapper
      .find(Link)
      .first()
      .simulate('click')
  );

  expect(
    wrapper
      .find(Link)
      .at(1)
      .simulate('click')
  );

  expect(global.window.scrollTo.mock.calls.length).toEqual(3);
});
