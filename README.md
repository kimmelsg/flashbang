# flashbang

[![CircleCI](https://circleci.com/gh/kimmelsg/flashbang.svg?style=svg)](https://circleci.com/gh/kimmelsg/flashbang)
[![Coverage Status](https://coveralls.io/repos/github/kimmelsg/tracker/badge.svg?branch=master)](https://coveralls.io/github/kimmelsg/tracker?branch=master)

- [QueryState](#query-state)
- [Toggle](#toggle)


## Query State

Stores state in the url. Useful for search pages. Must be rendered inside react-router v4.

- [See tests](/tests/query-state.js)
- [See Example in CRA](/example/src/example/query-state.js)

```js
import { QueryState } from 'flashbang'

const example = ({ state, setState }) => (
  <div>
    <input
      value={state.test}
      onChange={e => setState({ test: e.target.value })}
    />
  </div>
);

export default QueryState(example);
...

<Toggle>
  <div toggle>Swap</div>

  <div onn>This is shown when toggled</div>
  <div off>This is shown when not toggled</div>
</Toggle>
```


## Toggle

```js
import { Toggle } from 'flashbang'
...

<Toggle>
  <div toggle>Swap</div>

  <div onn>This is shown when toggled</div>
  <div off>This is shown when not toggled</div>
</Toggle>
```
