import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component{

  render () {
    var footStyle ={
      height:"5%",
      width:"100%",
      backgroundColor:"#101010",
      opacity:"0.9"
    }
    return(<div style = {footStyle}></div>)
  }
}
export default Footer;
