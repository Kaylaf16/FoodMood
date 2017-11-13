const express = require('express');
const router = express.Router();
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var bar = "";
var scoreAndLabel = "";
var score =""
var label = ""
router.post('/', (req,res)=>{
  if(typeof req.body.foodquery === 'undefined'){

      res.status(400).json({ error: 'missing parameter bar', data: null });
      return;
    }

     bar = JSON.stringify(req.body.foodquery);
     res.json(watson(bar));

     //res.redirect('/foodquery/posts2');

});

router.get('/posts2', (req,res)=>{
  console.log(label);
});

function watson(text){

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '60e5780c-7efc-4c0b-bd7c-19f24d313089',
  'password': 'RxIHeEKIqNoj',
  'version_date': '2017-02-27'
});

var parameters = {
  'text': text,
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
    //return(response.sentiment.document);

      scoreAndLabel=JSON.stringify(response.sentiment.document);
      for (var key in scoreAndLabel) {
    if (scoreAndLabel.hasOwnProperty(key)) {

      if(key == "score")
      {
        score =scoreAndLabel[key]

      }
      else{
        label = scoreAndLabel[key]
      }
    }
  }

  }

})
return scoreAndLabel;
}
module.exports = router;
