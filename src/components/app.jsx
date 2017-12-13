import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import Info from './Info.jsx';
import MidSecton from './midsection.jsx';

class AppSection extends React.Component {

  render () {
    var divStyle ={

    }
    return (<div style = {divStyle}><Header/><MidSecton/><Info/></div>)
  }
}
export default AppSection;
