'use strict';
var assert = require('assert');
var latestVersion = require('./index');

it('should get the latest version of a package', function (cb) {
	latestVersion('pageres', function (err, version) {
		assert(!err, err);
		assert(version);
		cb();
	});
});
