/*
Avoid these conversions: 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
*/

// In JavaScript the equality check and comparisons work differently.
// Comparisons change the value of the objects like null and undefined.

/// ===

console.log("2" === 2);