'use strict';
const packageJson = require('package-json');

const latestVersion = async (packageName, options) => {
	if (!options || options.normalizeName) {
		packageName = packageName.toLowerCase();
	}

	const {version} = await packageJson(packageName, options);
	return version;
};

module.exports = latestVersion;
// TODO: Remove this for the next major release
module.exports.default = latestVersion;
