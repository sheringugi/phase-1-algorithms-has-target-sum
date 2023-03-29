function hasTargetSum(array, target) {
  // iterates over each element in the array,
  // computes the difference between the target value and the element
  // checks if the resulting difference exists in the array using the indexOf() method.
 // If the difference exists in the array and its index is not the same as the current index, the function returns true,
 // indicating that a pair of numbers that add up to the target value has been found.    
      for (let i = 0; i < array.length; i++) {
      const diff = target - array[i];
      const diffIndex = array.indexOf(diff);
      
      if (diffIndex !== -1 && diffIndex !== i) {
        return true;
      }
    }
    return false;
  }
  
  


/* 
  O(n)-Linear runtime
*/

/* 
  Add your pseudocode here
*/

/*
 The fuction iterates over each element in the array,
  computes the difference between the target value and the element
  checks if the resulting difference exists in the array using the indexOf() method.
 If the difference exists in the array and its index is not the same as the current index, the function returns true,
 indicating that a pair of numbers that add up to the target value has been found.
*/

// You can run `node index.js` to view these console logs
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

module.exports = hasTargetSum;

