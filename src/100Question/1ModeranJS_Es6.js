/* 
Shortcut -
multiline commnet - shift+ Alt +A
 */

/*
Variables declare with "var" in JS are - Functional scope
Variables declare with "let & const" are Block scope

Modern JS says -don't use var


*/

// var name = "rahul";
// console.log(name);

// let name = "rahul";
// console.log(name);

// const name = "rahul";
// console.log(name);

// var name = "rahul";
// name="kumar"; //Reassign allow
// console.log(name);

// let name = "rahul";
// name="kumar"; //Reassign allow
// console.log(name);

// const name = "rahul";
// name="kumar"; //Reassign Not allow - TypeError
// console.log(name);

/* Here code inside if block is called - Block scope
Code inside function is - Function scope
*/

/* function Test1(args1){
    if(args1){
        let name = "rahul";
        const lname = "kumar";

        console.log("My name is "+ name +" " +lname); //Block scope
    }

    console.log("My name is "+ name +" " +lname); //ReferenceError: name is not defined
}

Test1(true); */


/* function Test1(args1){
    if(args1){
        var name = "rahul";
        var lname = "kumar";

        console.log("My name is "+ name +" " +lname); //Block scope
    }

    console.log("My name is "+ name +" " +lname); //Function scope
}

Test1(true); */


/* var output ="India";

if(true){
    var output="pak";
    console.log(output);
}
console.log(output); */

/* let output ="India"; //Her both are different variable -> have same name

if(true){
   let output="pak";
    console.log(output);
}
console.log(output); */


// ========#3: Template literals (Template strings) in ES6 in JavaScript========
/* 
Notes - 
*/

/* // Es5 - String concination - Using + sign
console.log("My name is Ram." + " " + "My age is 26.")
// Es6 - String concination - Using ` backtik sign
console.log(`My name is Ram. My age is 26.`)

// In case of veriable
let name ="ram";
let age = 23;
// Es5
console.log("My name is "+name +". My age is "+age +".");
// Es6
console.log(`My name is ${name}. My age is ${age}.`) */


/* // Expression is very easy using back tick
let a=10;
let b=20;
console.log(`Addition is ${a+b}
Multiplecation is ${2*a+b}`
) */


// =======#4: New Strings Methods in ES6 in JavaScript=======
//These 4 methods encluded

/* let name="Hello";
let age = 25;
console.log(`${name}`.startsWith('H'));
console.log(`${name}`.endsWith('H'));
console.log(`${name}`.includes('llo'));
console.log(`${name}-${age} `.repeat(5)); */

// =======#5: Array Destructuring in ES6 in JavaScript========
// Destructuring - to unpack values from arrays or properties or Objects into distinct variables.

/* const bookArr = ['Java','CPP', 'C','Javascript','Python'];
//Es5
// var top1 = bookArr[0];
// var top2 = bookArr[1];
// var top3 = bookArr[2];
// var top4 = bookArr[3]; 

// Es6
let [top1,top2,top3,top4,top5] = bookArr;
console.log(`Fetch java book : ${top1}`)

//Es6 skip middel variable in array
let [topone,,,,last] =bookArr;  // if count is more then : undefined
console.log(`Fetch java book : ${top1} and last book : ${last}`)

//Array length
console.log(bookArr.length)
*/

// =========================
// JavaScript Program to Swap Two Numbers without using Third Variable?

/* // Es5 - with temp variable
let a=10;
let b=20;
let temp;

// temp =a;
// a=b;
// b= temp;
// console.log(`First element a= ${a} and second b= ${b}`)

//Es6 without 3rd valriable
[a,b] = [b,a]
console.log(`First element a= ${a} and second b= ${b}`) */

// =======#7: Object Destructuring in ES6 in JavaScript==========

/* //create person pbject 
const person ={
    name : "Ram",
    age : 25,
    weight :50
}

console.log(`My name is ${person.name}`)

// Now object destructuring
let {name,age,weight} = person;
console.log(`My name is ${name} weight ${weight}`)

// Here we can change variable name also while object destructuring
let {name:name2,age:age2,weight:weight2} = person;
console.log(`My name is ${name2} weight ${weight2}`) */

/* //====Nested object destructuring======
const person ={
    name : "Ram",
    age : 25,
    weight :50,
    hoo :{
        hob1 :"cricket",
        hobb2 : "Singing"
    }
}

let {name, age,weight,hoo} =person;
console.log(`My name is ${name} age is ${age} and weight ${weight} and hobbies are ${hoo.hob1} , ${hoo.hobb2}`)
 */

/* // ========#8: Fat Arrow Function in JavaScript========
// or Arrow function -> Concise functions

const sum = () =>{
    let a =10;
    let b =20;
    return a+b;
}

const sum1 =(a,b) =>{
    return a+b;
}

//one line
const sum3 = (a,b) => { return a+b};
// const sum3 = (a,b) =>  a+b;


console.log(sum())
console.log(sum1(40,20))
console.log(sum3(15,25))
 */


/* // =======ES6 Default Parameters in JavaScript=========
// if value is not pass while function call argument then pass default value in fun parameter itself
const mul= (a,b=2) =>{
    return a*b;
}

console.log(mul(5));
 */


// =====#10: Rest Parameters in ES6 in JavaScript=======
// Rest Parameters - is an improve way to handle Function parameters
// - handle various input as parameter  - as an array
/* 
//Es6
const sum = (a,b,...inputs) =>{
    console.log(a);
    console.log(b);
    console.log(inputs); // array o/p- [1, 2, 3, 4,5, 6, 7]
    console.log(...inputs); // value o/p- 1 2 3 4 5 6 7

    let total =0;
    for (let i of inputs){
        total +=i;
    }

    console.log(`sum ${total}`)
}

sum(1,2,3,4,5,6,7);
 */

// ========#11: Spread Operator in ES6 in JavaScript=========
// ... is called 'rest paramter' and 'spread operator'- used in array

/* 
function sum(a,b,c){
 console.log(a+b+c)
}

let arr1=[5,3,7];
sum(...arr1);  // Use 1 -> Es6 Spread op - used while function call

//Use -2 remove concate 
let arr2=[2,3,4,5];
let arr3= [4,5,6,7];

// Es5
let arr4 = arr2.concat(arr3);
console.log(arr4);
//Es6
let arr5 = [...arr2, ...arr3];
console.log(`arr5 ${arr5}`);

//Es6 - copy arrOne in arrtwo then add 4,5 at last 
let arrOne=[1,2,3];
let arrTwo = [...arrOne,4,5]; //in Es5 push() need to call
console.log(`arrTwo ${arrTwo}`);

 */


// =====#14: Exponentiation Operator in ES6 in JavaScript=====
/* 
// Es5 -
let a=4;
let b=2;
console.log(a**b);

// Es6 - no need to declare variable
console.log(a**2); */


// ======#15: New Numbers method & Global Methods in JavaScript ======

/* // 1. isFinite() method - return false if argument is infinte
let num = Infinity;
console.log(isFinite(num)); // false

let num1 = NaN;
console.log(Number.isFinite(num1)); // false

// 2. isNan() - global method - returns true if argument is NaN , else false
let num2="ram";
console.log(isNaN(num2)); // true
console.log(isNaN(23)); // false
 */

// =========Es-8 -2017 - Async/Await in JavaScript==============
// - async/Await - special syntax to work with promise 
// - used to consume promise Data, no need to create promise

// Async - when used before a function means -> function returns a promise not value
// Await - use when callign a function that returns a promise. or API function - 
// - wait until that promise settles and returns its result.

const obj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
        // reject('Error while rejcting');
    }, 2000);
});

async function getData() {

    try {
        const rollno_data = await obj1;
        console.log(rollno_data);
    } catch (error) {
        console.log(`Error is : ${error}`);
    }
}

getData();



