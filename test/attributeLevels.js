import test from 'tape';
import ultralite from '../lib/ultralite.js';

test('--- attribute module tests', assert => {
    assert.deepEqual(
        Object.keys(ultralite.attributeLevels),
        ['ST', 'DX', 'IQ', 'HT'],
        'should have the four core attrbutes'
    );

    assert.deepEqual(
        Object.keys(ultralite.attributeLevels.ST),
        ['weak', 'normal', 'strong', 'veryStrong']
    );
    

    assert.deepEqual(
        Object.keys(ultralite.attributeLevels.DX),
        ['clumsy', 'normal', 'agile', 'veryAgile', 'extreme']
    );

    assert.deepEqual(
        Object.keys(ultralite.attributeLevels.IQ),
        ['dull', 'normal', 'smart', 'verySmart', 'genius']
    );

    assert.deepEqual(
        Object.keys(ultralite.attributeLevels.HT),
        ['sickly', 'normal', 'hardy', 'veryHardy']
    );

    assert.end();
});