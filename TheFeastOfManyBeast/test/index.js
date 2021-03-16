let feast = require('../src/index');
let assert = require('assert');

describe ('return true or false if the beats is allowed to bring the dish', function(){
    it('test', function(){
        let res = feast("great blue heron", "garlic naan");
        assert.strictEqual(res, true);
    })
    it('test', function(){
        let res = feast("chickadee", "chocolate cake");
        assert.strictEqual(res, true);
    })
    it('test', function(){
        let res = feast("brown bear", "bear claw");
        assert.strictEqual(res, false);
    })

})