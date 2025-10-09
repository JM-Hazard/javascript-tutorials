console.log("hello javascript day six");

//Function ---reusable blocks of code designed to perform specific tasks.
//parameters--- are placeholders defined in the function, 
//arguments ---are the actual values you pass when calling the function.

//Type of functions
//1.Named Function--A function that has its own name when declared

//2.Anonymous Function---A function that does not have a name.....//

//3. Function Expression--///
//4. Arrow Function (ES6)
//5.Immediately Invoked Function Expression (IIFE)
//6.Callback Functions...///
//7. Constructor Function
// 8.Async Function
// 9. Generator Function
// 10. Recursive Function
// 11. Higher-Order Function
// 12. Nested Functions,..//
// 13. Pure Functions
// 14. Default Parameter Function.../
// 15. Rest Parameter Function....//


//Declaring or defining using the funciton key word
function printThis(){
    console.log("printing,,,,,")
}
//call or invoke a function
printThis();



function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
let getCompare = compare(4,5);
console.log(getCompare)



//declaring a function with a function as a epression

let printMe = function(){
    console.log("print me")
}
printMe();
printMe();
printMe();
printMe()
printMe();

function sum(a,b){
    const result = a + b;
    // console.log(result)
    return result;
}
const result =sum(8,5);
console.log(result)

function double(x){
    return 2 * x
}
console.log(double(result));



let getData = function(a,b,c){
    return(2*(a+b+c));
}
let outcomes =getData(4,5,6);
console.log(outcomes)

function getDouble(y){
    return y;
}
console.log(getDouble(outcomes));


// default parameter

function calc(a,b=4){
    return (2*(a+b));
};
let outcome =calc(7);
console.log(outcome)



// rest Parameter

function calculateThis(x,y,...rest){
    console.log(x,y,rest)
}
calculateThis(1,2,3,4,5,6,7,8,9)



// Netsted function

function outer(){
    console.log("outer");

    function inner(){
        console.log("inner");
    }
    inner();// this inner function can only be invoked inside however if you 
    //want to invoke it outside we are gonna use an alternative return
}
outer();



function  outerValue(){
    console.log("This is the outer value of the function");

    return function innerValue(){
        console.log("This is  the inner value of the function");
    }
   
};
let retFun = outerValue()
console.log(retFun())// you must use a parenthesis when calling the inner value using the retun method


//callback function 

// callback function is a function that is passed as an argument to another function and executed later.

// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// // A callback function can execute after another function has finished.


function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);

// Here, sayBye() is passed as a callback to greet(), which executes after the greeting.


// How Do Callbacks Work in JavaScript?

// JavaScript executes code line by line (synchronously),
//  but sometimes we need to delay execution or wait for 
//  a task to complete before running the next function.
//   Callbacks help achieve this by passing a function that is executed later.

function foo(func){
    console.log("foo")
    
    func();
}
foo(function(){
    console.log("Buz")
});

//who calls the callback fuction
// a callback function is called based on a condition , it will be called inside the
//  funcitn where we are passing the function as as argument




//pure function

// it is a fucniton that provide the same autput as the input

function greeting(name){
    return `Hello,${name}`;

}
// let pureFunc=greeting("Yohannes");
// console.log(pureFunc);
console.log(greeting("Yohannes"));



//higher order function 
// is a function is that takes another  as a parameter or argument  and can return a  function


//arrow function 
// with arrow funciton we do not use the function key word
// if the function has only one statment we can omit the currlybrace

let fetchData =()=>console.log("greeting from javascript");

fetchData()


let greetMe =(greetingMessage) => console.log(greetingMessage);
 greetMe("Hola Amigos");



let greetingHer =(greeting)=>{
    return `${greeting}, Hana`
}
console.log(greetingHer("holla"));



//IIFE (Immediately Invoked Function Expression)