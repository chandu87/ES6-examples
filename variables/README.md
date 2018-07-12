## Variables declared using var are always hoisted to the top of their scope.

## var's are function-scoped: scope is limited to the function it was defined in.


## var’s are not block-scoped: scope is not limited to the block it was defined in.
## let - let variables are block-scoped! Specific scope = less mistakes.
## const restricts over-writing variables.
## const does allow variable mutation (only objects/arrays are mutable in JS).

>Array Mutation:
```
const a = [1];
const b = a;
console.log(a === b); // true
b.push(2);
console.log(a === b); // true
console.log(a); /// [ 1, 2 ]
```
>Object Mutation:
```
const obj = {};
obj.i = 1;
console.log(obj); // { i: 1 }
```
# let/const Hoisting
-let and const declarations are not hoisted!





