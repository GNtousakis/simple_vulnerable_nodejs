# simple_vulnerable_nodejs

## Overview

`simple_vulnerable_nodejs` is a simple Node.js library that provides a function to decode JSON strings into JavaScript objects. The `dec` function accepts a string and uses `eval` to parse it.

**Important Security Notice:** The use of `eval` in the `dec` function poses significant security risks. This README provides a detailed explanation of the potential dangers and includes examples of how malicious inputs can exploit the function.

## Installation

1. Clone the repository or download the source files.
2. Navigate to the project directory.
3. Run `npm install` if necessary.

## Usage

To use the `dec` function in your Node.js application:

```js
const myLibrary = require('./myLibrary');

const jsonString = '{"key": "value"}';
const obj = myLibrary.dec(jsonString);
console.log(obj); // Output: { key: 'value' }
```
