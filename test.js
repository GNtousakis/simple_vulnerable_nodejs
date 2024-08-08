const assert = require('assert');
const myLibrary = require('./index.js');

// Test valid JSON string
let result = myLibrary.dec('{"key": "value"}');
assert.deepStrictEqual(result, { key: 'value' }, 'Test Case 1 Failed');


