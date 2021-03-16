let makeUpperCase = require('../src/index');
let assert = require('assert');

describe ('make lowercase to uppercase', function(){
    it('test', function(){
        let res = makeUpperCase("hello");
        assert.strictEqual(res, "HELLO");
    })
    it('test', function(){
        let res = makeUpperCase("ascb");
        assert.strictEqual(res, "ASCB");
    })
    it('test', function(){
        let res = makeUpperCase("javascript");
        assert.strictEqual(res, "JAVASCRIPT");
    })
    it('test', function(){
        let res = makeUpperCase("billgates");
        assert.strictEqual(res, "BILLGATES");
    })
    
})