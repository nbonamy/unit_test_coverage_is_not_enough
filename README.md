# Unit Test Coverage is useless

Unit Test Coverage tells you which part of the code are not tested. It does not tell you if they are tested properly.

- add function implementation ([`index.js`](index.js)) is obviously wrong
- unit test ([`test.js`](test/test.js)) is also wrong
- but it passes and gets 100% coverage

See it for yourself:

```
npm install
npm run test
```
