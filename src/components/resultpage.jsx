import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import Footer from './footer.jsx';
import Header from './header.jsx';

class App extends React.Component {

  constructor(props)
  {
    super(props);
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
      justifyContent: "center"

    }
    var mainStyle ={
        backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('food10.jpg')",
        backgroundPosition:"center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      height:"100%"
    }
    var UlStyle={
      width:"50%",
      height:"60%",
      overflow:"auto",
      backgroundColor:"transparent",
      marginTop:"2%",
      textAlign:"center",
      padding:"0",
      marginRight:"auto",
      marginLeft:"auto"
    }
    var hStyle ={
      textAlign:"center",
      fontWeight:"200",
      fontFamily: "Avenir Next",
      marginBottom:30,
      marginTop:0,
    }
    var searchDiv ={
      display:"flex",
      alignItems: "center",
      justifyContent: "center"
    }


    var resultlist =this.state.info.map(function(element){
      return <Result restaurant={element.name} building={element.address.building} borough={element.borough} cuisine={element.cuisine} location={element.address.street}>
      </Result>
    });

    return (<div style = {mainStyle} ><Header/>
    <ul style = {UlStyle}>
      {resultlist}
    </ul>
    </div>)
  }
}
class Result extends React.Component{
  constructor(props)
  { super(props);
    this.state={
      showComponent: "",
      address:""

    };
     this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick()
   {
   console.log("hi");
  this.setState({showComponent: "hi"});
  if(this.state.showComponent)
  {
    setTimeout(<NewComponent/>, 5000);
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
      borderBottom:"1px solid white",
      margin:"2%",
      textAlign:"center"

    }
    var ImgStyle ={
      float:"right",
      marginRight:"20px"
    }
    var ParaStyle ={
      marginTop:"10",
      color:"white",
      fontSize:"20px",
      fontFamily: "Avenir Next",
      fontWeight: 300,
      letterSpacing: 2,
      paddingTop:50
    }
    var ParaStyle1 ={
      marginTop:"2",
      marginRight:"7",
      color:"white",
      fontSize:"18px",
      fontFamily: "Avenir Next",
      fontWeight: 300,
      letterSpacing: 2,
      paddingTop:5
    }


  return (<div style = {BoxStyle} onClick = {this.buttonClick}>

    <p style = {ParaStyle}>{this.props.restaurant}</p>
    <p style = {ParaStyle1}>{this.props.cuisine}<a href ={this.state.address}>
        <img style = {ImgStyle} src ="googlemap.png" width="30" height="30"/>
        </a></p>

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
class NewComponent extends React.Component{
  render(){

    return(
      <p>hi</p>
    )
  }
}
class circle extends React.Component{
   render() {
        var options = {
            strokeWidth: 2
        };

        // For demo purposes so the container has some dimensions.
        // Otherwise progress bar won't be shown
        var containerStyle = {
            width: '200px',
            height: '200px'
        };

        return (
            <Circle
                progress={this.state.progress}
                text={'test'}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle}
                containerClassName={'.progressbar'} />
        );
    }
}
export default App;
