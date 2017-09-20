import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Toggle from './example/toggle';
import QueryState from './example/query-state';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/toggle" component={Toggle} />
          <Route path="/query-state" component={QueryState} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
