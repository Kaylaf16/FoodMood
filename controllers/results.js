
var exports = module.exports = {};

exports.results = function(score){
  var sort ={
    healthy:0,
    nonhealthy:0
  }
  if(score == 0){
    sort.healthy = 10;
    sort.nonhealthy = 10;
    return sort;
  }
  current = ((score * 100) * .20);

  if( current < 0){
    sort.healthy =Math.floor((current * -1));
    sort.nonhealthy = 20 - Math.floor(current * -1 );
    if(sort.healthy == 0  || sort.healthy > 19)
    {
      sort.healthy ==1 ;
    }
    if(sort.unhealthy == 0 || sort.unhealthy > 19)
    {
      sort.unhealthy ==1 ;
    }

    return sort;

  }else{

    sort.nonhealthy = Math.floor(current);
    sort.healthy = Math.floor(20 - current);
    if(sort.healthy == 0 || sort.healthy > 19 )
    {
      sort.healthy ==1;
    }
    if(sort.unhealthy == 0 || sort.unhealthy > 19  )
    {
      sort.unhealthy ==1 ;
    }
    return sort;
  }

  }
