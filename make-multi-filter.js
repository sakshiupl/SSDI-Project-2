"use strict";


function MakeMultiFilter(originalArray) {
  // Create a variable to store the currentArray, initially identical to originalArray.
  let currentArray = [...originalArray];

 
  function arrayFilterer(filterCriteria, callback) {

    if (typeof filterCriteria !== 'function') {
      return currentArray;
    }

    // Using filterCriteria to filter the currentArray.
    currentArray = currentArray.filter(filterCriteria);

    // If callback is a function, call it with the value of currentArray as an argument.
    if (typeof callback === 'function') {
      callback.call(originalArray, currentArray);
    }

   
    return arrayFilterer;
  }

  
  return arrayFilterer;
}

const arrayFilterer1 = MakeMultiFilter([1, 2, 3]);
//Call arrayFilterer1 (with a callback function) to filter out elements not equal to 2

arrayFilterer1(
  function (elem) {
    return elem !== 2; // check if element is not equal to 2
  },
  function (currentArray) {
    console.log(this);
    console.log(currentArray); 
  },
);

// Call arrayFilterer1 (without a callback function) to filter out elements not equal to 3
const filteredArray = arrayFilterer1(function (elem) {
  return elem !== 3; // check if element is not equal to 3
})();

console.log('Filtered Array:', filteredArray); 

