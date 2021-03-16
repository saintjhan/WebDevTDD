let greet = require('../src/index');
let assert = require('assert');

describe ('Personalized Message', function(){
    it('test', function(){
        let ans = greet("Daniel", "Daniel");
        assert.strictEqual(ans, "Hello boss");
    })
    it('test', function(){
        let ans = greet("Greg", "Daniel");
        assert.strictEqual(ans, "Hello guest");
    })
    it('test', function(){
        let ans = greet("Greg", "Greg");
        assert.strictEqual(ans, "Hello boss");
    })
    
})