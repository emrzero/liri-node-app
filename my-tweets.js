
var Twitter = require('twitter');
var keys = require('./keys.js');

exports.client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
  count: 20,
  trim_user: 1
});


exports.lastTwenty = function(){

  this.client.get('statuses/user_timeline', function(error,tweets, response){
    if(error) throw error;
    tweets.forEach(function(element){
      console.log(element.created_at);
      console.log(element.text);
    });
  });


};