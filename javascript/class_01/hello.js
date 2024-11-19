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


         
