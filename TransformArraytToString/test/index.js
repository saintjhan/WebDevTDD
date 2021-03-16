let transform = require('../src/index');
let assert = require('assert');

describe ('transform array to string', function(){
    it('example', function(){
        let ans = transform(["BmX", false, 784]);
        assert.strictEqual(ans, "BmXfalse784");
    })
    it('example', function(){
        let ans = transform(["Hello", true, 143]);
        assert.strictEqual(ans, "Hellotrue143");
    })
    it('example', function(){
        let ans = transform(["Awts", false, "Hehe"]);
        assert.strictEqual(ans, "AwtsfalseHehe");
    })
    
})