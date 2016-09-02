var spotify = require('spotify');
var keys = require('./keys.js');
 
spotify.search({ type: 'track', query: 'Ramona Park' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(JSON.stringify(data, null, 2));
});