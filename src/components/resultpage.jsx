import React from 'react';
import Header from './header.jsx';
var info = '';

class App extends React.Component {

  getdata()
  {
  
  fetch('/foodquery/getdata')
  .then (results =>{
    return results.json()
  }).then (data=> {

 info = data;
 console.log(data);
})

}


  render () {
    this.getdata();
    return (<div><Header/>
      <Result/>
    </div>)
  }
}
class Result extends React.Component{


  render(){
    var BoxStyle = {
      height:100,
      width:200,
      border:"solid 2px",
      borderColor:"#C4625D"

    }
  return (<div style = {BoxStyle}>
    <p></p>
    <p></p>
  </div>)
}
}

export default App;
