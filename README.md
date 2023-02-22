# node-tests

> Playing with Node built-in test runner

This are example tests from my presentation [Learn About Node's New Built-in Test Runner]() from ConFoo.CA Feb 2023.

## Topics

- Basic syntax [demo.mjs](./test/demo.mjs)
- BDD syntax example [bdd.mjs](./test/bdd.mjs)
- BDD example with hooks [hooks.mjs](./test/hooks.mjs)
- Assertion examples [assertions.mjs](./test/assertions.mjs)
- "done" test callback parameter example [finished.mjs](./test/finished.mjs)
- Tags in the test titles [tags.mjs](./test/tags.mjs)
- Stub methods [stubs.mjs](./test/stubs.mjs)
- Stub ES6 exports using `esmock` [math-test.mjs](./test/math-test.mjs)
- Dynamically generated tests from asynchronous data [generated-tests.mjs](./test/generated-tests.mjs)
- Experimental code coverage with command `node --experimental-test-coverage test/calculator.test.mjs`

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2023

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/node-tests/issues) on Github

## MIT License

Copyright (c) 2023 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
