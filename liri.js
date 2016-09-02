var fs = require('fs');
var myRequest = require('request');
var keys = require('./keys.js');
var Twitter = require('twitter');

keys.bearer_token_credentials = keys.twitterKeys.consumer_key + ":" + keys.twitterKeys.consumer_secret;
// console.log(new Buffer('Hello World').toString('base64'));
keys.Base64_encoded_btc = new Buffer(keys.bearer_token_credentials).toString('base64'); 

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
  count: 20,
  trim_user: 1
});

client.get('statuses/user_timeline', function(error,tweets, response){
  if(error) throw error;
  // console.log(JSON.stringify(tweets, null, 2));  // The favorites. 
  // console.log(JSON.stringify(response, null, 2));  // Raw response object.

  tweets.forEach(function(element){
    console.log(element.created_at);
    console.log(element.text);
  });
});

var newArr = process.argv.slice(2);
  // * `my-tweets`  DONE

  // * `spotify-this-song`

  // * `movie-this`

  // * `do-what-it-says`

// var userCommand = newArr[0];
// var userParms = newArr[1];

function runCMD (){
  switch(newArr[0]){
    case 'my-tweets':
      myTweets();
      break;

    case 'spotify-this-song':
      spotify();
      break;

    case 'movie-this':
      movie();
      break;

    case 'do-what-it-says':
      simonSays();
      break;
  }
}

function myTweets(){
  console.log('tweet!!');
  console.log(keys.twitterKeys);
}

function spotify() {
  console.log('rock on!');
}

function movie(){
  console.log('netflix and chill');
}

function simonSays(){
  // console.log('simon says...');
  fs.readFile('random.txt', 'utf8', function(error, data){
    // console.log(data);
    newArr = data.split(',');
    // console.log(newArr);
    runCMD();
  });
}

runCMD();
