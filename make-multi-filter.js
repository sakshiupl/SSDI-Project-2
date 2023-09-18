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

