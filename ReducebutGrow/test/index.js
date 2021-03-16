let grow = require('../src/index');
let assert = require('assert');

describe ('reduce and grow numbers', function(){
    it('test', function(){
        let res = grow([1, 2, 3]);
        assert.strictEqual(res, 6);
    })
    it('test', function(){
        let res = grow([4, 1, 1, 1, 4]);
        assert.strictEqual(res, 16);
    })
    it('test', function(){
        let res = grow([2, 2, 2, 2, 2, 2]);
        assert.strictEqual(res, 64);
    })
    
})