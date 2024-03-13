/**
 * Returns an updated value of all items with quantity at 1
 * @param {*} groceriesMap 
 * @returns 
 */
export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new TypeError('Cannot process: argument must be a Map');
  }
  
  const updatedMap = new Map();
  
  for (const [item, quantity] of groceriesMap.entries()) {
    const newQuantity = quantity === 1 ? 100 : quantity; // Update only for qty 1
    updatedMap.set(item, newQuantity);
  }
  
  return updatedMap;
}