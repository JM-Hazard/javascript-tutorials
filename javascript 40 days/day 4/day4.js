console.log('hello day four javascript ')


// if --else staments


let catchingBus = false;
if(catchingBus){
    console.log("i will reach home on time")
}else{
    console.log("i will  be late to reach")
}


let age = 18;
if (age>=18

){
    console.log("your eligible to vote")
}else{
    console.log("you are not eligible to vote")
}

//let build a grading system 

let score = 69;

if (score >=90 ){

    console.log("Grade A")

}else if(score>=80){

    console.log("Grade B")

}else if(score>=70){

    console.log("Grade C")
}else{

    console.log("Failed")
}

let x = 0;

if(x===0){
console.log(0)
}

if(x >= 0){
    console.log("Greater than 0")
}
if(x<= 0){
console.log("Less than 0")
}





//swich 
// ---when there are multiple condition
//  if else might not be the right choice instead we use switch

let day =7;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2: 
         console.log("Tuesday");
         break;
    case 3:
        console.log("Wendesday")
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5: 
         console.log("Friday");
         break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
    console.log("Error")
}

let name="yohannes";

switch(name){
    case  "Yohannes":
        console.log("Learning 40 days of javascript");
        break;
    case "google":
        console.log("Giving answers to all searches");
        break;
        default:
        console.log("your are neither Google , nor Yohannes")
}
