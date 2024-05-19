//1. Create a prompt to enter name and match it to the correct one for 5x only.
let correctName = 'Adonis';
  let yourName;
  let counter = 5;

  do {
    yourName = prompt('Enter your name');
    counter -= 1;
    
    if (counter == 0) {
      console.log('You are not allowed to access it.');
    } else if (yourName !==correctName){
      console.log(`${yourName} is not correct. You have ${counter} left`)
    }else if (yourName === correctName){
      console.log(`Welcome back, ${correctName} `);
    }
  } while (yourName !== correctName && counter !== 0)

//2. Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

//Solution:
let triangle = '#';
  for (let tri=0; tri<7; tri++) {
    console.log(triangle);
    triangle = triangle + '#';
  }

// Clever:
for (let element = '#'; element.length < 8; element +='#') {
  console.log(element);
}

  //3. FizzBuzz
  // Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
  // For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

  // When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still 
  // print "Fizz" or "Buzz" for numbers divisible by only one of those).

  // Solution: 
  // Note to myself: 1. Use for loop nested with if-else; 2. Order: Make sure 
  for(let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log('FizzBuzz'); 
    } else if (i%5 === 0) {
      console.log('Buzz');
    }else if (i%3 === 0) {
      console.log('Fizz');
    }else {
      console.log(i);
    }
  }
