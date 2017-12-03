import React from 'react';
import {render} from 'react-dom';

import { Route } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Main from './app.jsx';
import ResultsPage from './resultpage.jsx';


const Routes = () => (

  <HashRouter>
    <div className = "app">
    <Route exact path="/" component={Main} />
    <Route exact path="/resultpage" component={ResultsPage} />
    </div>
  </HashRouter>

);

render(<Routes/>, document.getElementById('app'));
