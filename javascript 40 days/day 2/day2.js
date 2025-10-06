console.log("day two of javascript");

//variables are like a container used  to store data in javascript
// "Var" is a  function-scoped , can be redeclared  (not recommended)
// 'let" Block-scoped can be reassigned but can not be redeclared
// 'const' block-scoped cannot be reassigned

let fruit =  'manago';
let vegetable = 'Carrot';
vegetable='Spinach'
console.log(fruit);
console.log(vegetable);
//Alternatively 
console.log(`${fruit}
${vegetable}`);


//Rules to follow when declaring a variable

//the name must have digits (0-9) or letters
//the name can have  $ abd _
//the  first character must not be a digit
//no reserved keywords


/*
**primitive Data Types:

-'String'---Text values ('hello')
-'Number'----Numeric values (25,4,5)
-"Boolean"----True or false
-"Undefined"---a variblae declared but not assigned a value
-'Null;---- represents nothing 
-BigInt---large numbers
-Symbol---unique identifier




**non-premitive Data Type(reference)
-objects
-Array
-Functions
*/