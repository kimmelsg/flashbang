import React from 'react';
import { Toggle } from '../flashbang';

export default ({ state, setState }) => (
  <Toggle>
    <div toggle>Click this to swap the content</div>

    <div on>Toggle is now on!</div>
    <div off>Click the toggle above to turn it on!</div>
  </Toggle>
);
