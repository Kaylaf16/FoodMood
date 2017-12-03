var db = require("../model/db");

var exports = module.exports = {};

// call back needs to be put into place and edit query for food
exports.query = function(sortinfo,callback){
var sortlimit="";

    var query1, query2;


    var query1 = ({$or:[{cuisine:"Sandwiches/Salads/Mixed Buffet"},{cuisine:"Salads"},
    {cuisine:"Juice, Smoothies, Fruit Salads"},{cuisine:"Fruits/Vegetables"}]});

    query2=({$and:[{cuisine:{$ne:"Sandwiches/Salads/Mixed Buffet"}},{cuisine:{$ne:"Salads"}},
      {cuisine:{$ne:"Juice, Smoothies, Fruit Salads"}},{cuisine:{$ne:"Fruits/Vegetables"}}]});


    var projection = {_id:0,name:1,"address.building":1,"address.street":1};

    db.get().collection('restaurants').find(query1,projection)
    .sort({cuisine:1, name: 1})
     .limit(sortinfo.healthy).toArray(function (error,result){
      if(error){
        return console.log("failed to gather data" + " "+ error);}
        else if(result.length== 0){console.log("result is empty look at query and try again, or no results found")}
      else{
      
      if(finalresults.length == 2 )
      {
       return finalresults;
     }
     else{
       finalresults.push(result);
     }
  }
      })

      db.get().collection('restaurants').find(query2,projection)
       .limit(sortinfo.nonhealthy).toArray(function (error,result){
        if(error){
          return console.log("failed to gather data" + " "+ error);}
          else if(result.length== 0){return console.log("result is empty look at query and try again, or no results found")}
        else{
          if(finalresults.length == 2 )
          {
           return finalresults;
         }
         else{
           finalresults.push(result);
         }
    }

        })
    callback(finalresults);
      }