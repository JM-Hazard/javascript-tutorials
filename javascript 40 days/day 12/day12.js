console.log("hello world day 12");


// declaring objects using object literals

let myObject = {
 firstName : "Yohannes",
 lastName : "Mengisteab",
 "is admin" : true// when using a spacial charcter use  quotation 
};
console.log(typeof myObject);//object

// to print our a specific element from the object

console.log(myObject.firstName);
console.log(myObject["firstName"]);

// To add an element to the existing object using a dot notation

myObject.age = 40;
console.log(myObject.age);//40
myObject.isSeniorCitizen = false;


//  To add an element to the existing object using  a bracket notations
myObject["is movie lover"] = false;


// console loging  an element that is declared  using subscript 

console.log(myObject["is admin"]);



console.log(myObject);
console.log(myObject["is movie lover"]);

// modifying existing object  element
myObject["firstName"]="Hanitey";
myObject.firstName="Hiyabey";
console.log(myObject.firstName);
console.log(myObject["firstName"]);


myObject.age = 25;
console.log(myObject.age);

myObject["is movie lover"]= true;
console.log(myObject["is movie lover"])



// To delete an object element

// delete myObject.age;
// console.log(myObject.age)

// delete myObject["is movie lover"];
// console.log(myObject["is movie lover"])



// object method in an object
 let user ={
    name: "Eyu",
    age: 20,
    email:"eyu@gmail.com",
    location:"Asmara",
    blogs:[
        "why mac and cheese rules", "10 things to make with marmite"
    ],
    login:function(){
        console.log("user logged In");
    },
    logout:function(){
        console.log("User logged out");
    }
 }
 console.log(user.name)//eyu
 console.log(user.age)//20
 console.log(user["age"])//20
 user.location ="Addisababa" //alternatively we can use the following
 user['location'] = "Addis Ababa";// this modifies the location form asmara to addis ababa
 console.log(user['location'])//Addis Ababa

 delete user.age// this deletes the age 
 console.log(user["age"]);//undefined because age is deleted

//  to print out the method funciton in the above user object  we use the following
user.login();
user.logout()





// accesing an  item form an objec dynamically 

const someKey = "age";
 console.log(myObject[someKey]); //25

 let  movie = "is movie lover";
 console.log(myObject[movie]);



//  let car =prompt("what is your fav car model");
// let sport =prompt("what is your fav  sport");

//  let favItems={
//     [car]:1,
//     [sport]:1
//  }

//  console.log(favItems);





 // Constructor Function

 
 //to create an objects

//  The name of a constructor function must start with a capital letter

function  Car(name,model){
    this.name=name;
    this.model=model;


}
// you must use a new
const mazdaCar = new Car("Mazda", "CX-5");
console.log(mazdaCar);
const audiCar = new Car("audi", "A8");
console.log(audiCar);


// factory
// when using factor you dont have to use the new key word;
//alos not  the funcitn name has not neccesary be a capital nam

function createUser(name,age){
    return{
        name,
        age,
    }
}

const user1 = createUser("eyerusalem",34);
console.log(user1)
const user2 =createUser("Daniel",20);
console.log(user2);


// specially case 

function person(name,occupation){
    return{
        name,
        occupation,
        greet() {
            console.log(this.name,this.occupation)
        }
    }
}

const personInfo=person("yohannes","software Developer");
console.log(personInfo);
personInfo.greet();

const personDetails2=person("HanaYowa","software Developer");
console.log(personDetails2);


// A Nested Object


let profile = {
    name: "tapas",
    company:"CreaoWise",
    //creating an objec wose property value is a function
    message:function(){
        console.log(`${this.name} works at ,${this.company}`)
    },
    //The Nested object
    Address:{

        city: "Nairobi",
        pin:34434,
        state:"Jamhuri state",
        country:"Kenya",
        greetings : function(){
            console.log("welcome to Kenya to the land of  ")
        }

    },
    salary:undefined
    
}
console.log(profile.name);//tapas
profile.message();

const key = "company"
console.log(profile[key])//creowise

const keys ="name"
console.log(profile[keys])//tapas


// Accessing the nested  objects
console.log(profile.Address.city);//Nairobi

//Accessing the function under the nested objects
profile.Address.greetings();


console.log(profile.salary)

if(!profile.salary){
    console.log("The property salary does not exist in the profile objects")
}
//the above statment is not correct because  the salary propery exisyt 
// however when we  console log we / print out not exist
// to overcome this situaytion we have to use the in

console.log ("salary" in profile);


// if we want to walk through all the properties of the Object 
// we have  use 
// 

// for...in 

//to access all the properties of the object

for(let key in profile){
    console.log(key);// will print the keys only 
    console.log(profile[key])// will print the keys only  and their values
}


// using the object.keys to print all the properties of the object in an array form

console.log(Object.keys(profile))// this will print in an array  form
console.log(Object.keys(user))



//Object Reference

let fruits = { name:"Mango"}; //XA01
const oneMoreFruit = {name:"Mango"} //YB02

console.log(fruits==oneMoreFruit)// false
console.log(fruits===oneMoreFruit)//faslse

//Thought the above  const have the same value  their outcome is false becasues 
//  they are assigned different memory locations

fruits = oneMoreFruit
console.log(fruits==oneMoreFruit)// true
console.log(fruits===oneMoreFruit)//true








// // to add the salary property
// profile.salary ="$ 45,000";
// console.log(profile.salary)


//Static Method

// Object.assign

const target ={p:1,a:2};
const source ={a:3, B:5};

const returnedObj = Object.assign(target,source);// this will copy the source values to the target
console.log(returnedObj);

// the variable have common  property there will be overide
// the value of a will be replaces  by 3 because target and source 
// share the same variable a

const obj = {name:"Yohannes"};
const obj2 = Object.assign({}, obj)
console.log(obj2) // This will print out  a copy of the obj objects

console.log(obj===obj2) // false because the are not the same its just a copy



const obj3 ={
    a:1,
    b:{
        c:2
    }
}
 
// shallow copy

const obj4 = Object.assign({},obj3);
console.log(obj4)//{a:1,b:{c:2}} for the nested object it copys it reference

//  obj4.b.c=3;

 console.log(obj4.b.c)//3

 console.log(obj3.b.c)//3 
 // thoght we did not change the value of obj3 it
 //  still prints 3 instead of 2 


// In the following case in a non-nested object the values changed will not affect 

 obj4.a =100;
 console.log(obj4.a)//100
 console.log(obj3.a)//1


 // There for when cloning  the best alternative to use is structured clone instead of object.assign

 const obj5 =structuredClone(obj3)
 console.log(obj5)//{a:1,b:{c:3}} 

 obj5.a =300;
 obj5.b.c=30;

 console.log(obj5.a)//300
 console.log(obj3.a)//1


 console.log(obj5.b.c)//30
 console.log(obj3.b.c)//3


// object.entries
// the outcome will be an object converted into an array

const myObjects={
    a:"Hanitey",
    b:26
}
const myArr =Object.entries(myObjects)
console.log(myArr);



// new map

const enteries = new Map([
    ["foo","bar"],
    ["baz",43]
]);

const objEntries =Object.fromEntries(enteries);
console.log(objEntries);


// mutable => somethiing that you can change 
// immutable =>something you can not change


// object.freez

// once freez you can not modify
// you can not delet
// you can not add new value


const emp={
    name:"Ali",
    salary:45000

}

const myAray=Object.entries(emp);
console.log(myAray)

Object.freeze(emp);// this will fronzen the emp object there for any modification will not 
// be effective



//object.isfrozen


console.log(Object.isFrozen(emp)) //to check wheather it has been frozen or not



//object.seal

//you can modify
//you  can not delete
// you can not add new value


const dept={
    age:20,
    name:"EYERUSALEM",
    occupation:"developer"
}

Object.seal(dept);
dept["name"]="Yohannes Hana"//modification is possible  unlike object.freez
console.log(dept.name)
delete dept.age//is imposible
console.log(dept)



//object.hasOwn

// this check is the object has the listed key in it

console.log(Object.hasOwn(dept,"age"))//true
console.log(Object.hasOwn(dept,"age"))//false




//Object destucturing


const students={
    'name':'john williamson',

    'age':9,

    'std':3,

    'subject':['maths','English','Evs'],

    'parents':{

        'father':'Brown williamson',

        'mother':'sophia',

        'email':'john-parent@bcde.com',

    },
    'address':{

        'street':'65/2, booklyn road',

        'city':'Carterton',

        'country':'New zealand',

        'zip':5791
    }

};



// const name = students.name
// console.log(name)

// console.log(students.address.city)
// //alternatively i can use
// const city = students.address.city
// console.log(city)

// console.log(name,city)




// instead of writing all the above code which is long we can
//  use destructurin to write short code to achieve the same outcome



const {name,age,meal="bread"}=students
console.log(name,age ,meal)

const {subject,numberOfSubject=subject.length}=students;
console.log(numberOfSubject)//3

// includig alias
const {std: standard}=students;
console.log(standard)



// with nested
// to get all the items unders address we use the folowing

const{address}=students;
console.log(address)


//to acces a specific key from the address

const {address:{zip}}=students;
console.log(zip);



// using function without destructuring

function sendEmail(){

    console.log(`sent email to ${students.parents.email}`)

}
sendEmail(students);


// with destructuring

function sendEmail({parents:{email}}){

    console.log(`sent email to ${email}`)

}
sendEmail(students);


const getStudents= () =>{
    return {
    'name':'john williamson',

    'age':9,

    'std':3,

    'subject':['maths','English','Evs'],

    'parents':{

        'father':'Brown williamson',

        'mother':'sophia',

        'email':'john-parent@bcde.com',

    },
    'address':{

        'street':'65/2, booklyn road',

        'city':'Carterton',

        'country':'New zealand',

        'zip':5791
    }
}

};
