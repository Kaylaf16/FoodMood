import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import MidSecton from './midsection.jsx';

class AppSection extends React.Component {

  render () {
    return (<div><Header/><MidSecton/></div>)
  }
}
export default AppSection;
