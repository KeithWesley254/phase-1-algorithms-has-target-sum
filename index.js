function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j <  array.length; j++){
      firstNum = array[i]
      secondNum = array[j]
      if (firstNum + secondNum === target)
      return true;
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  There is a quadratic O(n^2) because of the nested iteration of "for loop".
  The constants have been removed.
  There is an iteration at the if statement O(n).
*/

/* 
  Add your pseudocode here
  Find 2 random numbers in a given array. I could use a for loop or Math.random()
  Compare the sum of those two numbers to the target.
  return true if those 2 numbers add up to the target or false when otherwise.
*/

/*
//Need to find a line of code that realizes I cant add any number in the array to equal target.
//   let sum =  0;
//   let firstNum = 0;
//   let secondNum  = 0
//   if (array.length < 2){
//     return false
//   }

//   const randomZ = () => Math.floor(Math.random() * array.length);

//   while(sum !== target){
//     firstNum = randomZ();
//     secondNum = randomZ();
//     sum = array[firstNum] + array[secondNum];

//     if (sum = target){
//       return true
//     }
//     return false
//   }
*/

/*
  Add written explanation of your solution here
  I iterated through the entire array using two index points at the same time
  using nested for loops.
  I then added the two numbers in the if statement and compared them to the target.
  returned true when values matched target and false when otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
