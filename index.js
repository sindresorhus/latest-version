'use strict';
const packageJson = require('package-json');

module.exports = (name, opts) => packageJson(name.toLowerCase(), opts).then(data => data.version);
