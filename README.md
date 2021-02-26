# Unit Test Coverage is not enough

Unit Test Coverage tells you which part of the code are not tested. It does not tell you if they are tested properly.

- add function implementation ([`index.js`](index.js)) is obviously wrong
- unit test ([`test.js`](test/test.js)) covers only one case
- but it passes and gets 100% coverage

See it for yourself:

```
npm install
npm run test
```
