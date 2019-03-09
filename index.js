'use strict';

const packageJson = require('package-json');

const lastestVersion = async (name, options) => {
	const {version} = await packageJson(name.toLowerCase(), options);
	return version;
};

module.exports = lastestVersion;
module.exports.default = lastestVersion;
