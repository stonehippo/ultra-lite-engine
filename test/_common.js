// Common stuff needed by all tests

// include Chai BDD/should
chai = require('chai');
sinon = require('sinon');
sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

// includle Blanket.js code coverage, config is in package.json
require('blanket');

// load the library itself
ultralite = require('../lib/ultralite.js');
