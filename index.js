'use strict';
var got = require('got');
var endpoint = 'https://registry.npmjs.org/';

module.exports = function (name, cb) {
	got(endpoint + encodeURIComponent(name) + '/latest', function (err, data) {
		if (err === 404) {
			return cb(new Error('Package doesn\'t exist'));
		}

		if (err) {
			return cb(err);
		}

		cb(null, JSON.parse(data).version);
	});
};
