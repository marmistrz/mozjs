'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-4-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a function
    parameter
flags: [onlyStrict]
---*/

        function funObj(x, y, z) {
            eval("delete y;");
        }
assert.throws(SyntaxError, function() {
            funObj(1);
});

reportCompare(0, 0);
