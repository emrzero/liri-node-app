var fs = require('fs');
var myRequest = require('request');

var twitter = require('./my-tweets.js');

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
      twitter.lastTwenty();
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
