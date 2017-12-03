import React from 'react';
import styler from 'react-styling'

var infouser = {score:"", check:false,
 label:""};
class Midsecton extends React.Component{

  render (){
    var MidStyle ={
      display: "flex",
    alignItems: "center",
    justifyContent: "center",
      minheHeight:300,
    backgroundAttachment: "fixed",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      flexDirection:"column",
      width:"100%",
      height:"85%",
      opacity:0.8,
    boxShadow:"0 10px 10px rgba(182, 182, 182, 0.75)",
     marginTop: "55px",
     position:"fixed",
     top:0,

      backgroundImage:"url("+"food4.jpg"+")",
    }

    return(<div className = "col-lg-12" style={MidStyle}><InnerMid /><InnerMidForm />
      </div>)
  }

}
class InnerMid extends React.Component{
  render(){
    var ImgStyle=
    {
        height:180,

    }
    var InnerDiv =
    {
      marginTop:250,
    }
    return(
      <div style = {InnerDiv}>
      <img  style ={ImgStyle}src="logo.png"/>

    </div>)
  }
}
class InnerMidForm extends React.Component{


  render(){
    var FormButton = {
    letterSpacing: 2,
    marginLeft:14,
    backgroundColor:"#C4625D",
    width:90,
    fontSize:15,
    fontFamily:"Roboto",
    color:"white",
    height:28,
    borderRadius:5,
    borderColor:"#C4625D",

    }
    var divStyle =
    {
      paddingLeft:30,
      marginLeft:50,
      paddingTop:20,
    }
    var InputStyle ={
      width:200,

    }

    return(
      <div style = {divStyle} >
        <form method= "POST" action = "/foodquery" encType="application/x-www-form-urlencoded">
        <input style = {InputStyle} type="text" name="foodquery" id="food"/>
        <button style = {FormButton}>Lets Go</button>
        </form>

    </div>)
  }
}
export default Midsecton;
