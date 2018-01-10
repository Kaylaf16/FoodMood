import React from 'react';
import {render} from 'react-dom';
import Footer from './footer.jsx';

class Info extends React.Component {
  render () {
    var StyleImg={

        height: "300px",
        opacity:0.6
    }
    var hStyle ={
      textAlign:"center",
      fontWeight:"250",
      fontSize:"35px",
      color:"#D64541",
      wordSpacing:"9px",
      fontFamily: "Avenir Next",
      marginTop:"40px",
    }
    var divStyle2 ={
      marginTop:60,
      display:"flex",
      alignItems: "center",
      justifyContent:"center",
      flexFlow: "row wrap",
      marginBottom:40,
    }
    var pStyle = {
      textAlign:"center",
      fontSize:"20px",
      fontFamily: "Avenir Next",
      fontWeight: 300,
      letterSpacing: "1px",
    }
    var divStyle3 ={
      width :"25%",
      marginLeft:"4%",
      marginRight:"4%",
      marginBottom:"6%",
      width:"100%"
    }
    var divStyle4 ={
      width :"25%",
      marginLeft:"4%",
      marginRight:"4%",
      marginTop:"5%"
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
      <div ><h1 style = {hStyle}>FOODMOOD</h1><div style = {divStyle2}>

      <div style = {divStyle3}>
        <p style ={pStyle}>  <i className="ion-fork" ></i><br/>We're all guilty of not knowing what we want to eat sometimes. FoodMood allows you<br/>
          to spend less time thinking and more time ordering!</p>
        </div>
        <p style ={pStyle}> <i className="ion-happy-outline"></i> &nbsp;Tell us your mood </p>
        <br/>
          <p style ={pStyle}> &nbsp;& Get suggested food <i className="ion-pizza" ></i></p>
</div></div>)
  }
}
export default Info;
