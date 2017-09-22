import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Toggle from './example/toggle';
import Paginate from './example/paginate';
import QueryState from './example/query-state';
import AsyncAction from './example/async-action';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/toggle" component={Toggle} />
          <Route path="/paginate" component={Paginate} />
          <Route path="/query-state" component={QueryState} />
          <Route path="/async-action" component={AsyncAction} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
