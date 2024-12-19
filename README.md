# JavaScript Null/Undefined Handling Error

This repository demonstrates a common error in JavaScript related to handling null or undefined values and provides a solution.

The `bug.js` file contains code that throws a `TypeError` when called with an undefined argument.  `bugSolution.js` shows how to handle this gracefully.  The core issue is the direct access of the `.length` property without first ensuring the object exists and is not null or undefined.