var spotify = require('spotify');
// var keys = require('./keys.js');
 
exports.songQuery = function(searchTerm) {

  if (searchTerm == undefined) {
          searchTerm = 'The Sign Ace';
        }

  spotify.search({ type: 'track', query: [searchTerm] }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
      
      console.log(data.tracks.items[0].artists[0].name);
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].preview_url);
      console.log(data.tracks.items[0].album.name);
  });
}