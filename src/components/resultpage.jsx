import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

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
    var mainStyle ={


    }
    var hStyle ={
      textAlign:"center",
      fontWeight:"200",
      fontFamily: "Avenir Next",
      marginBottom:30,

    }
    var InputSearchStyle ={

    }
    var searchDiv ={
      display:"flex",
      alignItems: "center",
      justifyContent: "center"
    }

    var resultlist =this.state.info.map(function(element){
      return <Result restaurant={element.name} building={element.address.building} location={element.address.street}/>;
    });

    return (<div style = {mainStyle} ><Header/><h1 style = {hStyle}>Your Results are here..</h1>
    <div style = {searchDiv}><input style = {InputSearchStyle} type="text"id="search"/></div>
    <div style = {HeadingStyle}>
      {resultlist}
      </div>

    </div>)
  }
}
class Result extends React.Component{
  constructor(props)
  { super();
    this.state={
      address:""
    }
  }
  componentWillMount(){
  var str = this.props.location;
  var res = str.split(" ");
  var str = this.props.building;
res.forEach(function(element) {
  str = str + "+"+ element.toUpperCase();
});

    this.setState({address:"https://www.google.com/maps/place/"+str})
  }
  render(){
    var BoxStyle = {
      height:250,
      width:200,
      padding:0,
      backgroundColor:"#FFF",
      webkitFilter: "drop-shadow (0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)",
      margin:"2%",
      textAlign:"center"

    }
    var ImgStyle ={
      float:"right",
    }
    var ParaStyle ={
      marginTop:"10",
      fontSize:"16px",
      fontFamily: "Avenir Next",
      fontWeight: 300,
      letterSpacing: 2,
    }

  return (<div style = {BoxStyle}>
    <Foodpic/>
    <p style = {ParaStyle}>{this.props.restaurant}</p>

    <a href ={this.state.address}>
      <img style = {ImgStyle} src ="googlemap.png" width="30" height="30"/>
    </a>
  </div>)
}
}
class Foodpic extends React.Component{
  render(){
    var ImgStyle1 ={
      height :"150",
      width:"200"
    }
    return(
      <img style={ImgStyle1} src = "food1.jpg"/>
    )
  }
}

export default App;
