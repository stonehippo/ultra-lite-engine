import test from 'tape';
import ultralite from '../lib/ultralite.js';

test('--- turn module tests ---', assert => {
    // Confirm the API of the module
    ["create"].forEach(m => {
        const actual = typeof ultralite.turn[m];
        const expected = 'function';
        assert.equal(actual, expected,
            `turn module should have method ${m}`);
    });

    const actual = ultralite.turn.create();
    const expected = {
        location: '',
        actions: []
    }

    assert.deepEqual(actual, expected,
        "factory should create a new turn object");

    assert.end();
});