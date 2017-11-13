import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import MidSecton from './midsection.jsx';

class App extends React.Component {
  render () {
    return (<div><Header/><MidSecton/></div>)
  }
}

render(<App/>, document.getElementById('app'));
