import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Toggle from './example/toggle';
import Paginate from './example/paginate';
import QueryState from './example/query-state';
import AsyncAction from './example/async-action';
import './styles.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/toggle'>toggle</Link></li>
        <li><Link to='/paginate'>paginate</Link></li>
        <li><Link to='/query-state'>query-state</Link></li>
        <li><Link to='/async-action'>async-action</Link></li>
      </ul>
    </nav>
  </header>
);

const Home = () => <div>Welcome. Click a link above.</div>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/toggle" component={Toggle}/>
            <Route path="/paginate" component={Paginate}/>
            <Route path="/query-state" component={QueryState}/>
            <Route path="/async-action" component={AsyncAction}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
