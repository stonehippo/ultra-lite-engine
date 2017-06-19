import test from 'tape';
import ultralite from '../lib/ultralite.js'

test('--- util module tests ---', assert => {
    const actual = typeof ultralite.util.objectMap;
    const expected = 'function';

    assert.equal(actual, expected,
        'has a method to map properties from one object to another');
    
    assert.end();
});