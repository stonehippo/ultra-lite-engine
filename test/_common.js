// Common stuff needed by all tests

// chai for assertions, sinon for spies/mocks/stubs
chai = require('chai');
sinon = require('sinon');
sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

should = require('chai').should();

// include Blanket.js code coverage, config is in package.json
require('blanket');

// load the library itself
ultralite = require('../lib/ultralite.js');
