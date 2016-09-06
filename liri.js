var fs = require('fs');
// var wstream = fs.createWriteStream('log.txt', {flags: 'r+'});

var twitter = require('./my-tweets.js');
var spotify_this = require('./spotify-this-song.js');
var movie_this = require('./movie-this.js');


var userCommand;
var userParms;

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

function processInput (inArr) {
  userCommand = inArr[0];
  userParms = inArr[1];
}

function simonSays(){
  fs.readFile('random.txt', 'utf8', function(error, data){
    processInput(data.split(','));
    runCMD();
  });
}


processInput(process.argv.slice(2));
runCMD();
