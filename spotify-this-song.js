var spotify = require('spotify');
var cliff = require('cliff'); //node library for formatting console output
var fs = require('fs');
 
exports.songQuery = function(searchTerm) {

  if (searchTerm == undefined) {
          searchTerm = 'The Sign Ace';
        }

  spotify.search({ type: 'track', query: [searchTerm] }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }

      var rows = [
        ['Artist Name', 'Song Name', 'Album Name', 'Preview URL']

        ,[data.tracks.items[0].artists[0].name
          ,data.tracks.items[0].name
          ,data.tracks.items[0].album.name
          ,data.tracks.items[0].preview_url
         ]
      ];

      console.log(cliff.stringifyRows(rows, ['red','red','red','red']));

  });

  
}