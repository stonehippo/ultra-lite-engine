// Common stuff needed by all tests

// chai for assertions, sinon for spies/mocks/stubs
global.chai = require('chai');
global.sinon = require('sinon');
let sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

should = require('chai').should();

// load the library itself
import ultralite from '../lib/ultralite.js';
global.ultralite = ultralite;
