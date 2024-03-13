/**
 * Returns an updated value of all items with quantity at 1
 * @param {*} groceriesMap 
 * @returns 
 */
export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new TypeError('Cannot process: argument must be a Map');
  }
  
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}