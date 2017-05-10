// |reftest| error:SyntaxError
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Function declaration not allowed in statement position
esid: sec-for-statement
es6id: 13.7.4
negative:
  phase: early
  type: SyntaxError
---*/

for ( ; false; ) function f() {}
