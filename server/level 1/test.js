var logic = require('./logic.js')
var test = require('tape');
 
test('Testing sum', function (t) {
    var op1, op2;
    var N = 100
    t.plan(N);
    for (var i=0; i<N; ++i){
        op1 = Math.floor(Math.random() * 1000);
        op2 = Math.floor(Math.random() * 1000);
        t.equal(logic.sum(op1,op2), op1+op2);
    }
});

test('Testing mul', function (t) {
    var op1, op2;
    var N = 100
    t.plan(N);
    for (var i=0; i<N; ++i){
        op1 = Math.floor(Math.random() * 1000);
        op2 = Math.floor(Math.random() * 1000);
        t.equal(logic.mul(op1,op2), op1*op2);
    }
});
