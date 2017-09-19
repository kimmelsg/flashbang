import React from 'react';
import { mount } from 'enzyme';
import { QueryState } from '../src';
import { MemoryRouter, Route } from 'react-router';

const Example = QueryState(({ state, setState }) => (
  <div>
    <input
      value={state.test}
      onChange={e => setState({ test: e.target.value })}
    />
  </div>
));

test('should render with state from url', () => {
  const wrapper = mount(
    <MemoryRouter
      initialEntries={[{ pathname: '/test', search: '?test=Awesome' }]}
      initialIndex={0}
    >
      <Example />
    </MemoryRouter>
  );
  expect(
    wrapper
      .find('input')
      .first()
      .props().value
  ).toEqual('Awesome');
});

test('should update url state', done => {
  const wrapper = mount(
    <MemoryRouter
      initialEntries={[{ pathname: '/test', search: '?test=Awesome' }]}
      initialIndex={0}
    >
      <div>
        <Example />
        <Route
          path="/test"
          render={props => {
            if (props.location.search === '?test=testing%20%26%20ampersand%21')
              done();
            return null;
          }}
        />
      </div>
    </MemoryRouter>
  );
  wrapper
    .find('input')
    .first()
    .simulate('change', { target: { value: 'testing & ampersand!' } });

  setTimeout(() => false, 400);

  expect(
    wrapper
      .find('input')
      .first()
      .props().value
  ).toEqual('testing & ampersand!');
});
