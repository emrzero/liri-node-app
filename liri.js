var fs = require('fs');
var req = require('request');
var keys = require('./keys.js');

var newArr = process.argv.slice(2);
  // * `my-tweets`

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
