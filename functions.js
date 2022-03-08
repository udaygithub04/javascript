//function
function sayHello(){
    console.log("hello from functions");
}
sayHello();

//functions with parameters
function sum(num1,num2){
    let addition=num1+num2;
    console.log(addition);
}
sum(14,6);

//function with return type
function multiply(num1,num2){
    return num1*num2;
}
let ans=multiply(3,5);
console.log(ans);

//storing function in variable
let a=function sub(num1,num2){
         return num1-num2;
       }
       console.log(a(10,5));

 //IIFE
 (function (){
     console.log("hello from IIFE");
 }) ();
 
 //IIFE with parameters
 (function(num1,num2){
     console.log(num1/num2);
 })(10,5);
