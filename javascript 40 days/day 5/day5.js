console.log("hello day 5 javascript ");

//Loop -- is doing something repeatedly 

//types of loops

//1. for loop---used for a fixed iteration
// it is best when we know exactly how many times we need to run a block of code.

// for loop is written as follow
// for(initialization;CSSConditionRule;update)


// count reverse from 10 to 0
//  for (let count = 10; count >= 0; count--){
//     console.log(count);//1,2,3,4,5
//  }

 //counting normal from 0 to 10
 for (let count = 0; count <= 10; count++){
    console.log(count);//1,2,3,4,5
 }


 //listing all the  even numbers between 1 to 100;
 for( i = 1 ; i <= 100; i++){

 if(i % 2===0){
   console.log(i)
 }
 }


 //Addition of even numbers between 1 to 100;
 let sum =0;
  for( i = 1 ; i <= 100; i++){
   
 if(i % 2===0){
 sum = sum + i
 }
 }
 console.log("sum is ", sum) //2550

//printing the position of each letter in the following instance;

 let language = "Javascript";
 for (let i = 0; i <language.length; i++){
   console.log(language.charAt(i));
 }


 //nested loop

 for(let i =1 ; i<=3 ; i++){
   for (let j=1; j<=3; j++){
      console.log("row",i,"col",j)
   }
 }


 //Break
// break exits from the current iteration

 for (let i = 1; i <= 5; i ++){

   if(i===3)  break;
    console.log(i)
 }

//Countinue
//skips a certain iteration and countinue 

 for (let i = 1; i <= 5; i ++){

   if(i===3) continue;
    console.log(i)
 }

 //multiple cunter  for single loop;
 for (i=1,j=10; i<=10 && j>=1 ; i++,j--){
   console.log(i,j);
 }


//2.whil loop
// it runs as long as a given condition  is true
// and is used when you don't know how many time you need to  iterate the code
  

// while(condition){
  //   //code
  // }

  let counter = 1;
  while(counter <=5){
        console.log(counter);
         counter++;
  }

  








//3.do while loop--this iterate atleast once 

// do{
//   //code
// }while(condition)

let number =1;
do{
  console.log(number);
  number ++;
}while(number<=7);


//infinite loop// to study and do  more research later