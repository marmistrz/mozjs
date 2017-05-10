// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-rest-nested-obj-undefined.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: When DestructuringAssignmentTarget is an obect literal and the iterable is emits no values, an empty array should be used as the value of the nested DestructuringAssignment. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
es6id: 13.3.2.4
features: [destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var x = null;
var length;

var result;
var vals = [];

result = [...{ 0: x, length }] = vals;

assert.sameValue(x, undefined);
assert.sameValue(length, 0);

assert.sameValue(result, vals);

reportCompare(0, 0);
