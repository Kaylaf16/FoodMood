import React from 'react';
import styler from 'react-styling'

class Header extends React.Component {
  render () {
  var HeaderStyle = {

    flex:1,
    height:55,
    alignSelf: 'stretch',
    background:"#C4625D",
    padding:0,

    margin:0}
    return(<div style={HeaderStyle}>
      <Tabs/>
      </div>)

   }
  }
  class Tabs extends React.Component{
    render(){
      var TabStyle = {
      float:"right",
      padding: 10,
      paddingTop:0,
      paddingBottom:0,
      marginTop:5,

      letterSpacing: 2,
      color:"white",
    };
      var TabStyle1 = {
       listStyleType: "none",

       fontFamily: "cursive",
       paddingBottom:0,
       color:"white",

     };
      var LinkStyle ={
        textDecoration:"none"
      };
      var HeadingStyle ={
        float:"left",
        fontFamily: "cursive",
        padding:10,
        letterSpacing: 2,
        fontSize:25,
        paddingBottom:0,
        color:"white",
      }
      return(
        <div className ="container-fluid">
          <ul style = {TabStyle1}>
            <li style = {HeadingStyle}> <a style={LinkStyle}href ="">FoodMood</a></li>
          </ul>
        <ul style = {TabStyle1}>
        <li style = {TabStyle}>Placeholder</li>
        <li style = {TabStyle}>Placeholder</li>
        </ul>
      </div>)
    }
  }
export default Header;
