'use strict';
const packageJson = require('package-json');

module.exports = (name, version) => packageJson(name.toLowerCase(), version ? {version} : {}).then(data => data.version);
