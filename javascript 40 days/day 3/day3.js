console.log("hello day three ");

// javscript operators
/*

1.Athtematic operators
2.assignment Operators
3.comparison operators
4.Relational Operators
5.logical operators
6.Bitwise operators
7.conditional operators
8.Grouping 
typeOf
instanceOf
*/


//Arthematic operators

let a = 10;
let b = 20;
console.log( a + b ); //30

// expenensial operator
let x =5;
let y = 3;
console.log(5**4) //125


// inrement
let count = 5;
console.log(count ++);//5 the value is printed post increment
console.log(count)//6

console.log(++count)//7


//Assignment operators

let z=10;
z +=5;//15


//comparison operators

console.log(0==false) //due to type coersion the result is true
console.log(0===false)//false

console.log(null===null);//true strictly equallity operators
console.log(undefined===undefined)// true


//logical operators

//&&--- if any of the operand is false the result is false
console.log(false && false)//false
console.log(true && false)//false
console.log(true && true)//ture
console.log(false && true)//false

console.log('cow'&& 'horse')// horse

// || or -- if any of the operand is ture the result will be true
console.log(false || false)//false
console.log(true || false)//true
console.log(true || true)//ture
console.log(false ||true)//true

console.log('cow' || 'horse')//cow


//??----nullish coal logical operator
// if the first operand can be converted into or is  a null or undefined
//  returnt the second value value otherwise return the first value

let a1 = null ?? 1 // 1
let a2= undefined?? 3//3
const a3 = false ?? "tapas" //false





//ternary operator -- in javascript it is a shorthand for an if --else statment 
// and is the only operator in javascript that takes three operands
let age = 18;
let beverage =(age >=21)?'beer' : 'juice';
console.log(beverage);//juice

//condition ? exprIfTrue : exprIfFalse;

let ageYear = 23;
let citizen =(ageYear >= 60) ? "senior citizen":"non senior citzen"
console.log(citizen);