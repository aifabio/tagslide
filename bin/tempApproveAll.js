/**
 * temp tool until post admin is made
 */

var mongoose = require('mongoose'),
	async = require('async'),
	env = require('node-env-file'),
	Post = require('../server/models/Post')
	Tag = require('../server/models/Tag'),
	instagram = require('instagram-node').instagram();;

// get setting like foreman does
env(__dirname + '/../.env');

if (!process.env.MONGOLAB_URI){
	console.log('Please set the environment variable MONGOLAB_URI.');
}

mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connection.on('error', function(e){
	console.log('Mongoose Error:', e)
});

Post.update({}, {approved:true}, {multi: true}, 
    function(err, num) {
        console.log("updated "+num);
        mongoose.connection.close();
    }
);