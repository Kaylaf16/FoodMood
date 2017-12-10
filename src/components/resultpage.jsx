import React from 'react';
import Header from './header.jsx';


class App extends React.Component {

  constructor(props)
  {
    super();
    this.state={
      info:[]
    };
  }
  componentWillMount()
  {

  fetch('/foodquery/getdata')
  .then (results =>{
    return results.json()
  }).then (data=> {

 this.setState({info : data[0].concat(data[1])});

})

}


  render () {
    var divStyle = {
      display:"flex",
      flexFlow: "row wrap"


    }
    var HeadingStyle={
      display:"flex",
      flexFlow: "row wrap",
      alignItems: "center",
  justifyContent: "center",
      marginTop:"5%"
    }

    var resultlist =this.state.info.map(function(element){
      return <Result/>;
    });
    console.log(this.state.info);
    return (<div ><Header /><div style = {HeadingStyle}>
      {resultlist}
      </div>
    </div>)
  }
}
class Result extends React.Component{


  render(){
    var BoxStyle = {
      height:150,
      width:250,
      padding:0,
      backgroundColor:"#FFF",
      webkitFilter: "drop-shadow (0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)",
      margin:"2%"

    }
  return (<div style = {BoxStyle}>
    <p></p>
    <p></p>
  </div>)
}
}

export default App;
