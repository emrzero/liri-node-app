var myRequest = require('request');
var cliff = require('cliff'); //node library for formatting console output
var fs = require('fs');

exports.search = function (searchTerm) {
  if (searchTerm == undefined) {
          searchTerm = 'Mr. Nobody';
        }
  reqURL = 'http://www.omdbapi.com/?plot=short&r=json';
  reqURL += '&tomatoes=true'
  reqURL += '&t=';
  reqURL += searchTerm.replace(/ /g,"+");

  myRequest(reqURL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Show the HTML for the Google homepage.
    body = JSON.parse(body);
    var rows = [
      ['Title'
      ,'Year'
      ,'IMDB Rating'
      ,'Country'
      ,'Language'
      ,'Actors'
      // ,'Plot'
      ]

      ,[body.Title
      ,body.Year
      ,body.imdbRating
      ,body.Country
      ,body.Language
      ,body.Actors
      // ,body.Plot
      ]
        ];
    console.log(cliff.stringifyRows(rows, ['red', 'red', 'red', 'red', 'red', 'red', 'red']));

    rows2 = [
      ['Rotten Tomatoes Rating', 'Rotten Tomatoes URL']
      ,[body.tomatoRating, body.tomatoURL]
        ];
    console.log(cliff.stringifyRows(rows2, ['red', 'red']));

    console.log(cliff.stringifyRows([['Plot'],[body.Plot]], ['red']));

    }
  });
}
