import test from 'tape';
import ultralite from '../lib/ultralite.js';

test('--- skill modules tests ---', assert => {
    const actual = ultralite.skill.create({name: "Knight"});
    const expected = {name: "Knight"};

    assert.deepEqual(actual, expected,
        'new skill "Knight" should have been created');
    
    assert.end();
});