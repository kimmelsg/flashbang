import React from 'react';
import { QueryState } from '../flashbang';

const example = ({ state, setState }) => (
  <div>
    <input
      value={state.test}
      onChange={e => setState({ test: e.target.value })}
    />

    <input
      value={state.another}
      onChange={e => setState({ another: e.target.value })}
    />
    <div>{state.another}</div>
  </div>
);

export default QueryState(example);
