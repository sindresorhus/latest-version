#!/usr/bin/env node
'use strict';
var meow = require('meow');
var latestVersion = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ latest-version <package-name>',
		'',
		'Example',
		'  $ latest-version pageres',
		'  0.4.1'
	]
});

if (cli.input.length === 0) {
	console.error('Expected a package name');
	process.exit(1);
}

latestVersion(cli.input[0], function (err, version) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	console.log(version);
});
