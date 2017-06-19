import test from 'tape';
import ultralite from '../lib/ultralite.js';

test('--- dice module tests ---', assert => {
    // Confirm the module API
     // Confirm the API of the module
    ["rollWithRange", "rollWithDiceCountOf"].forEach(m => {
        const actual = typeof ultralite.dice[m];
        const expected = 'function';
        assert.equal(actual, expected,
            `dice module should have method ${m}`);
    });
    
    // throws exceptions if the params to rollWithRange don't meet certain rules
    assert.throws(
        () => ultralite.dice.rollWithRange(),
        /min value not specified/,
        'rollWithRange should throw an exception if missing a minimum range argument'
    );
    
    assert.throws(
        () => ultralite.dice.rollWithRange(0),
        /max value not specified/,
        'rollWithRange should throw an exception if missing a maximum range argument'
    );
    
    assert.throws(
        () => ultralite.dice.rollWithRange(0,0),
        /min value must be <= 1/,
        'rollWithRange should throw an exception if minimum range is less that 1'
    );
   
   assert.throws(
       () => ultralite.dice.rollWithRange(1.1,0),
       /min value must be an integer/,
       'rollWithRange should throw an exception if minimum is not an integer'
   );

   assert.throws(
       () => ultralite.dice.rollWithRange(2,1),
       /max must be greater than min/
   )

   assert.throws(
       () => ultralite.dice.rollWithRange(1,2.1),
       /max value must be an integer/,
       'rollWithRange should throw an exception if maximum is not an integer'
   )

    assert.end();
});