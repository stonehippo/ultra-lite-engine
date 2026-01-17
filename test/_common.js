// Common stuff needed by all tests

// chai for assertions, sinon for spies/mocks/stubs
// deno-lint-ignore-file no-unused-vars
import { use, should as loadShould } from "chai";
import sinon from "sinon";
import sinonChai from 'sinon-chai';

globalThis.sinon = sinon;
globalThis.should = loadShould();
use(sinonChai);

// load the library itself
import ultralite from '../lib/ultralite.js';
globalThis.ultralite = ultralite;
