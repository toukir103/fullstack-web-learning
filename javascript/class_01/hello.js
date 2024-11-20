// Printing the sum of two numbers
console.log(10 + 20);
console.log("ami programmer");
console.log("i am toukir ahmed abid");

// Using variables to calculate and print the sum
var a = 50, b = 20;
console.log(a + b);

// String with a newline
var myName = "toukir \n ahmed abid";
console.log(myName);

// -----------------------------------------------------------
// Arrays
// -----------------------------------------------------------
var array_01 = ["a", "b", "c", "d", "e", "f", "g", "m"];
console.log(array_01[2]);               
console.log(array_01.indexOf("d"));     

array_01.push("abid");                 
array_01.pop();                        
array_01.unshift("abid");             
array_01.shift();                     
console.log(array_01);                 

var array_02 = [1, 2, 5, 3, 7, 9, 5, 4];
array_02.sort();                       
console.log(array_02);

// -----------------------------------------------------------
// Objects
// -----------------------------------------------------------
var x = { color: "black", 
    name: "toukir",
     age: 25, 
     country: "bangladesh" ,
     array:[1,2,5,3,4],
     fabMovies:{
         "movie1":"avengers",
         "movie2":"inception",
         "movie3":"spider man"
     }
    };
console.log(typeof x);                  
console.log(x);
console.log(x.country);      
console.log(x.array[3]);
console.log(x.fabMovies.movie1);
delete x.age;
console.log(x); 
// Object.freeze(x);
x.name="Abid";
console.log(x.name);

// -----------------------------------------------------------
// undefine  and null
// -----------------------------------------------------------
var y;

console.log(y);

var z=null;
console.log(z);
console.log(z==y);
console.log(z===y);

 // -----------------------------------------------------------
// mathematical operations
// -----------------------------------------------------------        

const eggPrice =60;
const saltPrice = 100;
const sugarPrice = 150;

const totalCost = eggPrice + saltPrice + sugarPrice;
console.log(totalCost);

const discount = 0.1;
const discountedCost = totalCost - (totalCost * discount);
console.log(discountedCost);

 // -----------------------------------------------------------
// string Concatenation 
// -----------------------------------------------------------        

let first_name="Toukir Ahmed";
let last_name="Abid";

let fullName = first_name + " " + last_name;
console.log(fullName);

// -----------------------------------------------------------
// Conversion
// -----------------------------------------------------------  

let num = 10;
console.log(typeof num);

let str = num.toString();
console.log(typeof str);    
let num_1="30.025";
console.log(typeof num_1);  
num_1=parseInt(num_1);
console.log(typeof num_1);
num_1=parseFloat(num_1);
console.log(typeof num_1);


// -----------------------------------------------------------
// Conversion
// -----------------------------------------------------------  

let a1 = 30;
let b1 = 30;
if (a1 == b1) {
    console.log("yes\n");
}


// -----------------------------------------------------------
// For Loop
// -----------------------------------------------------------
console.log("For Loop Examples:");
for (let i = 0; i < 5; i++) {
    console.log("Loop iteration:", i);
}

// Printing an array with for loop
var myArray = ["apple", "banana", "cherry", "date"];
for (let i = 0; i < myArray.length; i++) {
    console.log("Element at index", i, "is:", myArray[i]);
}

// Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; // sum = sum + i
}
console.log("Sum of numbers from 1 to 10 is:", sum);

// Nested for loop example
console.log("Nested For Loop:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// -----------------------------------------------------------
// While Loop
// -----------------------------------------------------------
console.log("While Loop Example:");
let count = 0;
while (count < 5) {
    console.log("Count is:", count);
    count++;
}

// -----------------------------------------------------------
// Do-While Loop
// -----------------------------------------------------------
console.log("Do-While Loop Example:");
let num3= 5;
do {
    console.log("Number is:", num3);
    num3--;
} while (num3 > 0);

// -----------------------------------------------------------
// Break and Continue
// -----------------------------------------------------------
console.log("Break and Continue Examples:");
for (let i = 0; i < 10; i++) {
    if (i === 5) break; 
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue; // Skip even numbers
    console.log(i); 
}

// -----------------------------------------------------------
// Functions
// -----------------------------------------------------------
console.log("Function Examples:");

// Simple function
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Toukir");

function addNumbers(x, y) {
    return x + y;
}
let result = addNumbers(10, 20);
console.log("Sum is:", result);

// Function with default parameters
function multiplyNumbers(a = 2, b = 3) {
    return a * b;
}
console.log("Product is:", multiplyNumbers(4, 5)); 
console.log("Product with defaults:", multiplyNumbers()); 

// Arrow function
const square = (n) => n * n;
console.log("Square of 5 is:", square(5));

// -----------------------------------------------------------
// Using Objects with Loops
// -----------------------------------------------------------
console.log("Looping Through Object Properties:");
var person = {
    name: "Toukir Ahmed Abid",
    age: 25,
    profession: "Programmer",
    country: "Bangladesh",
};
for (let key in person) {
    console.log(key + ":", person[key]);
}

// -----------------------------------------------------------
// Array Methods Example
// -----------------------------------------------------------
console.log("Array Methods Example:");
let numArray = [10, 20, 30, 40, 50];

// Using forEach
numArray.forEach((num) => {
    console.log("Number:", num);
});

// Using map
let squaredArray = numArray.map((num) => num * num);
console.log("Squared Array:", squaredArray);

// Using filter
let filteredArray = numArray.filter((num) => num > 25);
console.log("Filtered Array (greater than 25):", filteredArray);

// Using reduce
let totalSum = numArray.reduce((acc, num) => acc + num, 0);
console.log("Total Sum of Array Elements:", totalSum);
