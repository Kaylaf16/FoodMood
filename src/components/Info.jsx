import React from 'react';
import {render} from 'react-dom';
import Footer from './footer.jsx';

class Info extends React.Component {
  render () {
    var StyleImg={
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
        backgroundImage:"url("+"food1.jpg"+")",
        height: "300px",
        opacity:0.6
    }
    var hStyle ={
      textAlign:"center",
      fontWeight:"400",
      fontFamily: "Avenir Next",
      marginBottom:"50px"
    }
    var divStyle2 ={
      marginTop:60,
      display:"flex",
      alignItems: "center",
  justifyContent: "center",

      flexFlow: "row wrap",
      marginBottom:40,
    }
    var pStyle = {
      textAlign:"center",
      fontSize:"16px",
      fontFamily: "Avenir Next",
      fontWeight: 300,
      letterSpacing: "1px",
    }
    var divStyle3 ={
      width :"25%",
      marginLeft:"3%",
      marginRight:"3%"
    }
    var ImgStyle1={
      width:100,
      height:100,
      margin:"auto",
      display:"block",
      marginBottom:10
    }
    var ImgStyle2={
      width:100,
      height:100,
      margin:"auto",
      display:"block"
    }
    var ImgStyle3={
      width:100,
      height:100,
      margin:"auto",
      display:"block",
      marginBottom:70
    }
    return (
      <div><h1 style = {hStyle}>Whats on the Menu?</h1><div style ={StyleImg}></div><div style = {divStyle2}>
      <div style = {divStyle3}><img src = "pic1.png" style = {ImgStyle1}></img><p style ={pStyle}>We're all guilty of not knowing what we want to eat sometimes. FoodMood allows you<br/>
          to spend less time thinking and more time ordering!</p></div><div style = {divStyle3}><img src = "pic2.png" style = {ImgStyle2}></img><p style ={pStyle}>Just tell us how you're
        feeling and we'll suggest a mix of healthy and unhealthy food options! The worse you're feeling,
      the healthier the options that are chosen for you.</p></div><div style = {divStyle3}><img src = "pic3.png" style = {ImgStyle3}></img><p style ={pStyle}>What are you waiting for?<b> Start eating!</b> </p></div></div><Footer/></div>)
  }
}
export default Info;
