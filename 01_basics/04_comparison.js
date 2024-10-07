// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === "2");



// console.log("2">"2"); why it is false 
// and console.log("2">"12") why it is true;
// In JavaScript, when you compare strings using relational operators like `>`, they are compared lexicographically (dictionary order), which is based on the Unicode values of the characters.

// 1. **`console.log("2" > "2");`**:
//    - Here, both strings are identical. Since they are the same, the comparison evaluates to `false`.

// 2. **`console.log("2" > "12");`**:
//    - In this case, the comparison checks the strings lexicographically:
//      - The first character of `"2"` is compared to the first character of `"1"`.
//      - Since the Unicode value of `"2"` (50) is greater than that of `"1"` (49), `"2"` is considered greater than `"12"`, resulting in `true`.

// So, the results are:
// - `"2" > "2"` is `false` (same value).
// - `"2" > "12"` is `true` (compared lexicographically).