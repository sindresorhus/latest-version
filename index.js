'use strict';
const packageJson = require('package-json');

module.exports = (name, options) => packageJson(name.toLowerCase(), options).then(data => data.version);
