# flashbang

[![CircleCI](https://circleci.com/gh/kimmelsg/flashbang.svg?style=svg)](https://circleci.com/gh/kimmelsg/flashbang)
[![Coverage Status](https://coveralls.io/repos/github/kimmelsg/tracker/badge.svg?branch=master)](https://coveralls.io/github/kimmelsg/tracker?branch=master)

- [QueryState](#query-state)
- [Toggle](#toggle)
- [Paginate](#paginate)
- [Async Action](#async-action)

## Install

```js
npm install flashbang
```

## Query State

Stores state in the url. Useful for search pages. Must be rendered inside react-router v4.

- [source](/src/query-state.js)
- [tests](/tests/query-state.js)
- [example](/example/src/example/query-state.js)

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
```


## Toggle

Toggle the display of data with three simple props!

- [source](/src/toggle.js)
- [tests](/tests/toggle.js)
- [example](/example/src/example/toggle.js)

```js
import { Toggle } from 'flashbang'

<Toggle>
  <div toggle>Swap</div>

  <div on>This is shown when toggled</div>
  <div off>This is shown when not toggled</div>
</Toggle>
```


## Paginate

Display 5 page numbers in either direction with next and previous buttons

- [source](/src/paginate)
- [tests](/tests/paginate.js)
- [example](/example/src/example/paginate.js)

Import the default css, or pass your own class names and use your own css!

```js
import { Paginate } from 'flashbang';
import 'flashbang/dist/paginate/style.css';

export default () => (
  <Paginate
    page={5}
    pages={25}
    createURL={page => `?page=${page}`}
  />
);
```


## Async Action

Changes text depending on promise status. Blocks onClick if a promise is in the middle of resolving, or finished.

- [source](/src/async-action.js)
- [tests](/tests/async-action.js)
- [example](/example/src/example/async-action.js)

```js
import { AsyncAction } from 'flashbang'

<AsyncAction
  onClick={() => new Promise(resolve => setTimeout(resolve, 100))}
  before={<div>Create</div>}
  during={<div>Creating...</div>}
  after={<span>Created!</span>}
/>
```
