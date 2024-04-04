console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <=100; i++) {
if ( i % 2 !==0) {
    console.log(i);
} 

}  

//exercise 2
for (let i = 0; i <= 100; i++) {
    //lets say i is 15 on this loop
    let output = "";
    if (i % 3 == 0) {
        output += "Fizz";
        //now output is equal to "Fizz"
    }
    if (i % 5 == 0) {
        output += "Buzz";
        // output was "Fizz", now we're adding Buzz to that, to create "FizzBuzz"
   }
   if (output.length == 0){
    console.log(i);
   }
   console.log(output, i);
}

//for loops are for iterating over many things
//while loops can be used for checking conidtions multiple times or doing arithmetic
for(let i = 0; i <= 100; i+1) {
if (i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz", i);
} else if (i % 3 == 0){
    console.log("Fizz", i);
} else if (i % 5 == 0){
    console.log("Buzz", i);
}else {
    console.log(i);
}
}
//excercise 3
//start of whiel loop
i = 0;
while (i <= 100) {
   if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz", i);
    } else if (i % 3 == 0){
        console.log("Fizz", i);
    } else if (i % 5 == 0){
        console.log("Buzz", i);
    }else {
        console.log(i);  
    }
 i++;
}
//start of do while loop
i = 0;
do {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz", i);
    } else if (i % 3 == 0){
        console.log("Fizz", i);
    } else if (i % 5 == 0){
        console.log("Buzz", i);
    }else {
        console.log(i);
    }
    i++;
} while (i <= 100)
//excercise 4

let value = Math.round((Math.random() * 500 ));
let n = Math.round(Math.random() * (500 + 100) + 100);

for (let i = 0; i < n; i++) {
    if (i == value) {
        console.log("Found Value");
    } else if (i == n){
        console.log("Did not find value");
    }
}

//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);