var fs = require('fs');
var myRequest = require('request');

var twitter = require('./my-tweets.js');
var spotify_this = require('./spotify-this-song.js');
var movie_this = require('./movie-this.js');

var newArr = process.argv.slice(2);
  // * `my-tweets`  DONE

  // * `spotify-this-song`

  // * `movie-this`

  // * `do-what-it-says`

var userCommand = newArr[0];
var userParms = newArr[1];

function runCMD (){
  switch(userCommand){
    case 'my-tweets':
      twitter.lastTwenty();
      break;

    case 'spotify-this-song':
      spotify_this.songQuery(userParms);
      break;

    case 'movie-this':
      movie_this.search(userParms);
      break;

    case 'do-what-it-says':
      simonSays();
      break;
  }
}


function movie(){
  console.log('netflix and chill');
}

function simonSays(){
  fs.readFile('random.txt', 'utf8', function(error, data){
    // console.log(data);
    newArr = data.split(',');
    // console.log(newArr);
    runCMD();
  });
}

runCMD();
