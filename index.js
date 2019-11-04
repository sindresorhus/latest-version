'use strict';
const packageJson = require('package-json');

const latestVersion = async (packageName, options) => {
	const {version} = await packageJson(packageName.toLowerCase(), options);
	return version;
};

module.exports = latestVersion;
// TODO: Remove this for the next major release
module.exports.default = latestVersion;
