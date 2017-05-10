// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-skip-non-enumerable.case
// - src/dstr-binding/default/for-of-var.template
/*---
description: Rest object doesn't contain non-enumerable properties (for-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
es6id: 13.7.5.11
features: [destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    IterationStatement :
        for ( var ForBinding of AssignmentExpression ) Statement

    [...]
    3. Return ForIn/OfBodyEvaluation(ForBinding, Statement, keyResult,
       varBinding, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    3. Let destructuring be IsDestructuring of lhs.
    [...]
    5. Repeat
       [...]
       h. If destructuring is false, then
          [...]
       i. Else
          i. If lhsKind is assignment, then
             [...]
          ii. Else if lhsKind is varBinding, then
              1. Assert: lhs is a ForBinding.
              2. Let status be the result of performing BindingInitialization
                 for lhs passing nextValue and undefined as the arguments.
          [...]
---*/
var o = {a: 3, b: 4};
Object.defineProperty(o, "x", { value: 4, enumerable: false });

var iterCount = 0;

for (var {...rest} of [o]) {
  assert.sameValue(rest.a, 3);
  assert.sameValue(rest.b, 4);
  assert.sameValue(rest.x, undefined);

  verifyEnumerable(rest, "a");
  verifyWritable(rest, "a");
  verifyConfigurable(rest, "a");

  verifyEnumerable(rest, "b");
  verifyWritable(rest, "b");
  verifyConfigurable(rest, "b");


  iterCount += 1;
}

assert.sameValue(iterCount, 1, 'Iteration occurred as expected');

reportCompare(0, 0);
