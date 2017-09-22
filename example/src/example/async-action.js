import React from 'react';
import { AsyncAction } from '../flashbang';

export default () => (
  <AsyncAction
    onClick={() => new Promise(resolve => setTimeout(resolve, 1000))}
    before={<div>Create</div>}
    during={<div>Creating...</div>}
    after={<span>Created!</span>}
  />
);
