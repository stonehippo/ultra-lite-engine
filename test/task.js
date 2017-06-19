import test from 'tape';
import ultralite from '../lib/ultralite.js'

test('--- task module tests ---', assert => {
    // Describe the task type
    const defaultTask = {
        baseRoll: 10,
        modifier: 0,
        status: null,
        roll: null,
        skill: null
    };
    
    // Confirm the API of the module
    ["create", "roll", "resolve"].forEach(m => {
        const actual = typeof ultralite.task[m];
        const expected = 'function';
        assert.equal(actual, expected,
            `task module should have method ${m}`);
    });

    assert.deepEqual(
        ultralite.task.status,
        {
            success: "success",
            criticalSuccess: "criticalSuccess",
            failure: "failure",
            criticalFailure: "criticalFailure"
        },
        "should have statuses for task resolution"
    )

    // this test sucks; there's probably a need for a mock here, or some way to test the range
    const actualRoll = (() => {
        let i = 1000;
        do {
            let roll = ultralite.task.roll();
            if (!(roll >= 3 && roll <= 18)) {
                return false;
            }
            i--; 
        } while (i);
        return true;
    })();
    
    const expectedRoll = true;
    assert.equal(actualRoll, expectedRoll,
        'all task rolls should be between 3 and 18, inclusive');

    // Various scenarios for creating tasks
    [
        { spec: undefined, mods: {}, msg: 'a default task'},
        { spec: {skill: "Knight"}, mods: {skill: "Knight", modifier: -6}, msg: 'a task requiring a skill'},
        { spec: {modifier: 2}, mods: {modifier: 2}, msg: 'a task with modifier'},
        { spec: {modifier: 2, skill: "Knight"}, mods: {modifier: -4, skill: "Knight"}, msg: 'a task with positive modifier & skill'},
        { spec: {modifier: -2, skill: "Knight"}, mods: {modifier: -8, skill: "Knight"}, msg: 'a task with negative modifier & skill'},
    ].forEach(t => {
        const actual = ultralite.task.create(t.spec);
        const expected = {...defaultTask, ...t.mods};
        assert.deepEqual(actual, expected, `factory should create ${t.msg}`);
    });

    // test task resolution cases
    // Normally, we'd used ultralite.task.roll(), but we'll mock it with a fixed value here
    [
        {mockRoll: 10, status: "success", spec: {}, mods: {}, msg: "a success resolved task"},
        {mockRoll: 11, status: "failure", spec: {}, mods: {}, msg: "a failure resolved task"},
        {mockRoll: 3, status: "criticalSuccess", spec: {}, mods: {}, msg: "a critical success resolved task"},
        {mockRoll: 18, status: "criticalFailure", spec: {}, mods: {}, msg: "a critical failure resolved task"},
        {mockRoll: 11, status: "success", spec: {modifier: 1}, mods: {}, msg: "a success resolved task with modifier"},
        {mockRoll: 10, status: "failure", spec: {modifier: -1}, mods: {}, msg: "a failure resolved task with modifier"},
        {mockRoll: 4, status: "success", spec: {skill: "Knight"}, mods: {modifier: -6}, msg: "a success resolved task with skill"},
        {mockRoll: 10, status: "failure", spec: {skill: "Knight"}, mods: {modifier: -6}, msg: "a failure resolved task with skill"},
        {mockRoll: 6, status: "success", spec: {skill: "Knight", modifier: 2}, mods: {modifier: -4}, msg: "a success resolved task with skill & modifier"},
        {mockRoll: 4, status: "failure", spec: {skill: "Knight", modifier: -1}, mods: {modifier: -7}, msg: "a failure resolved task with skill & modifier"},
    ].forEach(r => {
         const t = ultralite.task.create(r.spec);
        const actual = ultralite.task.resolve(t, r.mockRoll);
        const expected = {
            ...defaultTask,
            ...r.spec,
            ...r.mods, 
            roll: r.mockRoll,
            status: ultralite.task.status[r.status]
        }
        assert.deepEqual(actual, expected, `should be ${r.msg}`);
    });

    assert.end();
});