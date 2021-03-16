let move = require('../src/index');
let assert = require('assert');

describe ('move', function(){
    it('test', function(){
        let ans = move(0,4);
        assert.strictEqual(ans, 8);
    })
    it('test', function(){
        let ans = move(3,6);
        assert.strictEqual(ans, 15);
    })
    it('test', function(){
        let ans = move(2,5);
        assert.strictEqual(ans, 12);
    })
    
})