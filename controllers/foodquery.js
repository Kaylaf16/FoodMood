const express = require('express');
const router = express.Router();
var db = require("../model/db");
var sort = require("./results.js");
var queryresult = require("./query.js");
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var bar = "";
information = {
  score:"",
  label:""
}
sortinfo = ""
finalresults = []
router.post('/', (req,res)=>{
  if(typeof req.body.foodquery === 'undefined'){

      res.status(400).json({ error: 'missing parameter bar', data: null });
      return;
    }
    bar = JSON.stringify(req.body.foodquery);
    var natural_language_understanding = new NaturalLanguageUnderstandingV1({
      'username': '60e5780c-7efc-4c0b-bd7c-19f24d313089',
      'password': 'RxIHeEKIqNoj',
      'version_date': '2017-02-27'
    });

    var parameters = {
      'text': bar,
      'features': {
        'sentiment':{}
      }
    }


     natural_language_understanding.analyze(parameters, function(err, response) {
       if (err)
           return('error:', err);
       else
       {
         //console.log(scoreAndLabel);
         //how to get the label and vice versa the score;
         //label = response.sentiment.document["label"];
         //return(response.sentiment.document)
           information.score = (response.sentiment.document["score"]);
           information.label = (response.sentiment.document["label"]);
           sortinfo = sort.results(information.score);
        

     }
      res.redirect("/#/resultpage");
     })


})
router.get('/getdata',(req,res)=>{
queryinfo=queryresult.query(sortinfo,(e)=>{
res.send(e);
});
});
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
module.exports = router;
