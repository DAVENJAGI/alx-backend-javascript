function cleanSet(mySet, startString) {
  if (!mySet instanceof Set || typeof startString !== 'string') {
    throw new TypeError('Invalid input types: set must be a Set and startString must be a string');
  }
  
  const filteredValues = Array.from(mySet)
    .filter(value => value.startsWith(startString))
    .map(value => value.substring(startString.length));
  
  return filteredValues.join('-') || ''; // Return empty string if no matches
}