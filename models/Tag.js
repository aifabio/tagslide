/**
 * Model that  represents a tag that should be subscribed to
 * @type {Model}
 */
var mongoose = require('mongoose');

var Tag = new mongoose.Schema({
	"id": {type: String, required: true}
});

module.exports = mongoose.model('Tag', Tag);