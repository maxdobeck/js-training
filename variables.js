/* constants. [per mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) they 
can't be changed and are block scoped like 'let'. 
*/
const n = 100;

// these error out: TypeError: Assignment to constant variable.
// n = 'abc';
// n = 2;

// a little confusing, source from mozilla doc
//It does not mean the value it holds is immutable—just that the variable identifier 
// cannot be reassigned. For instance, in the case where the content is an object, 
// this means the object's contents (e.g., its properties) can be altered.