function hasValuesFromArray() {
  if (!mySet instanceof Set || !Array.isArray(myArray)) {
    throw new TypeError('Invalid input types: set must be a Set and array must be an array');
  }  
  return myArray.every(element => mySet.has(element));
}