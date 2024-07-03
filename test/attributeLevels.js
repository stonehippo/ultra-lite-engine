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
        ultralite.attributeLevels.ST,
        {
            'weak': {'baseRoll': 8, 'hitPoints': 8, 'basicDamage': '1d6/2'},
            'normal': {'baseRoll': 10, 'hitPoints': 10, 'basicDamage': '1d6'},
            'strong': {'baseRoll': 14, 'hitPoints': 14, 'basicDamage': '2d6'},
            'veryStrong': {'baseRoll': 18, 'hitPoints': 18, 'basicDamage': '3d6'}
        }
    );

    assert.deepEqual(
        Object.keys(ultralite.attributeLevels.DX),
        ['clumsy', 'normal', 'agile', 'veryAgile', 'extreme']
    );

    assert.deepEqual(
        ultralite.attributeLevels.DX,
        {
            'clumsy': {'baseRoll': 8},
            'normal': {'baseRoll': 10},
            'agile': {'baseRoll': 12},
            'veryAgile': {'baseRoll': 14},
            'extreme': {'baseRoll': 16}
        }
    );

    assert.deepEqual(
        Object.keys(ultralite.attributeLevels.IQ),
        ['dull', 'normal', 'smart', 'verySmart', 'genius']
    );

    assert.deepEqual(
        ultralite.attributeLevels.IQ,
        {
            'dull': {'baseRoll': 8},
            'normal': {'baseRoll': 10},
            'smart': {'baseRoll': 12},
            'verySmart': {'baseRoll': 14},
            'genius': {'baseRoll': 16}
        }
    );


    assert.deepEqual(
        Object.keys(ultralite.attributeLevels.HT),
        ['sickly', 'normal', 'hardy', 'veryHardy']
    );

    assert.deepEqual(
        ultralite.attributeLevels.HT,
        {
            'sickly': {'baseRoll': 8},
            'normal': {'baseRoll': 10},
            'hardy': {'baseRoll': 14},
            'veryHardy': {'baseRoll': 18}
        }
    );


    assert.end();
});