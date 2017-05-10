'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.1-4-30-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier 'eval'
    appears as the LeftHandSideExpression (PrimaryExpression) of
    simple assignment(=) under strict mode
flags: [onlyStrict]
---*/

        var blah = eval;
assert.throws(SyntaxError, function() {
            eval("(eval) = 20;");
});
assert.sameValue(blah, eval, 'blah');

reportCompare(0, 0);
