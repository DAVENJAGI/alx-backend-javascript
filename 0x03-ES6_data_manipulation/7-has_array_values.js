/**
 * Returns boolean if all elements in the array exist
 * @returns 
 */
export default function hasValuesFromArray(mySet, myArray) {
  return myArray.every((element) => mySet.has(element));
}
