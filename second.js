//1st
const a = getNumberFromUser("Please enter the number:");
calculateFormula(a);
function calculateFormula(variable) {
  for (let counter = 1; counter < 1000; counter++) {
    if (counter % variable == 0) {
      console.log(counter);
    }
  }
}
//2nd
const a1 = getNumberFromUser("Please enter the number");
findCount(a1);
function findCount(variable){
  let number = 0;
  for (let i = 1; i * i < variable; i++) {
    number = number + 1;
  }
  console.log(number);
}

//3rd
const a3 = getNumberFromUser("Please enter the number:");
printTheLargestDivisor(a3);
function printTheLargestDivisor(variable){
  let divisor;
  for (let index = 1; index <= variable / 2; index++) {
    if (a3 % index == 0) {
      divisor = index;
    }
  }
  console.log(divisor);
}

//4th
const a4 = getNumberFromUser("Please enter the value for a:");
const b4 = getNumberFromUser("Please enter the value for b:");
printSum(a4,b4);
function printSum(a,b){
  let sum = 0;
for (let n = a; n < b; n++) {
  if (n % 7 == 0) {
    sum = sum + n;
  }
}
console.log(sum);
}


//5th
function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
    
} 
const num = getNumberFromUser("Please enter the positive number:");
console.log(fibonacci(num))


//6th
function findGCD(a6, b6){
    if(a6==0){
        return b6;
    }
    return findGCD(b6%a6,a6);
}
let a6 = getNumberFromUser("Please enter the value for A:");
let b6 = getNumberFromUser("Please enter the value for B:");
console.log(`GCD: `+ findGCD(a6,b6));


//7th
let a7 = getNumberFromUser("Please enter the number:");
findMirrorImage(a7);
function findMirrorImage(variable){
  let r, mirror = 0;
while (variable != 0) {
  r = variable % 10;
  mirror = mirror * 10 + r;
  variable = (variable - r) / 10;
}
console.log(`Mirror image:${mirror}`);
}



//8th
let a8 = getNumberFromUser("Please enter the value for A:");
let b8 = getNumberFromUser("Please enter the value for B:");
checkSameDigit(a8,b8);
function checkSameDigit(a,b){
  let ra, rb;
  let flag=false;
  while(a != 0){
    ra = a % 10;
    a = (a-ra)/10;
    while(b != 0){
      rb = b % 10;
      b = (b-rb)/10;
    if(ra==rb){
        flag=true;
        console.log(`YES!`);
      }
  }
  } 
  if(flag==false){
    console.log(`NO!`);
  }
}