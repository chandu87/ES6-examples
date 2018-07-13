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

# Blocks and IIFEs
- Block scope variables are not accessiable after block completion. This is same like IIFEs variables in ES5

# Strings
### template literals
```
.startsWith(string)
.endsWith(string)
.includes(string)
"```${}```"
.repeat(num)
```

# Arrow functions
[defination from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- Arrow function share the lexical surrounds of this keyword

- when writing functions inside the methods. they dont have access to this keyword. they just check locally or in global variables. You can solve this by binding this to function inside method or use arrow functions which share lexical surroundings of this keyword

- when you write arrow functions as methods in object or constructor. It dont have access to 'this' of that object. These arrow functions share lexical surrodings with the outer variables.(in this case also checks global variables)

# Destructuring
- ES6 - const [name, age] = ['John', 26];
 
# Arrays
- ES5 - Array.prototype.slice.call(nodeList)
-ES6 - Array.from(nodeList)

# Continue
- skip the iteration and continue next loop iteration
# break
- break the loop

## 'for' vs 'for of' loop
# includes Array.includes and String.includes

# array.findIndex and array.find

# Spread operator
- Used in function call
```
years[2010,2011,2012]
apples(...years)
```
# rest parametor
-userd in function declration to accept arguments as a array
function apples(...years)
-arguments variable in function by default is not an array but look like a array.
In ES5 way you have to convert by using Array.prototype.slice.call(arguments)

#