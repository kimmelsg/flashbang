import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import QueryState from './example/query-state';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/query-state" component={QueryState} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
