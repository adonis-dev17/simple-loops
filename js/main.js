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