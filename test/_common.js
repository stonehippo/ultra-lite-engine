// Common stuff needed by all tests

// include Chai BDD/should
should = require('chai').should();

// includle Blanket.js code coverage, config is in package.json
require('blanket');

// load the library itself
ultralite = require('../lib/ultralite.js');
