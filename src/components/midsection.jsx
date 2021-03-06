import React from 'react';
import styler from 'react-styling'
import { Jumbotron, Button } from 'react-bootstrap';
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
     top:0,
     marginBottom:"50px",
      backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('food4.jpg')"
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

    }
    return(
      <div style = {InnerDiv}>
      <img  style ={ImgStyle}src="logo.png"/>

    </div>)
  }
}
class InnerMidForm extends React.Component{


  render(){

    var divStyle =
    {
      paddingLeft:30,
      marginLeft:50,
      paddingTop:20,
      marginRight:20
    }
    var InputStyle ={
      width:250,
      backgroundColor:"transparent",
      color: "#eeeeee",
      outline: "none",
      outlineStyle:"none",
      borderTop:"none",
      borderLeft: "none",
      borderRight: "none",
      borderBottom:" solid white 2px",
      padding: "3px 10px",
      marginRight:"20px",
      fontSize:"22px"
    }
    var imgStyle1={
      width:50,
      height:50
    }
    var FormButton = {
      backgroundColor:"transparent",
      outline:0,
      border: "2px solid white",
      color: "white",
      padding:" 5px 5px 5px 5px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize:"16px",
      margin:"2px",
      cursor: "pointer",
      width :"95px",
      height:"40px",
      borderRadius:"2px"
    }
    return(
      <div style = {divStyle} >

        <form method= "POST" action = "/foodquery" encType="application/x-www-form-urlencoded">
        <input style = {InputStyle} type="text"autoComplete="off" placeholder="How are you feeling?" name="foodquery" id="food"/>
        <button id = "search" style = {FormButton}>Search</button>
        </form>

    </div>)
  }
}
export default Midsecton;
