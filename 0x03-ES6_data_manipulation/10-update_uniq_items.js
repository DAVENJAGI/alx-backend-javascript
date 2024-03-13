/**
 * Changes the quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 */
export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceriesMap.forEach((value, key) => {
    if (value === 1) {
      groceriesMap.set(key, 100);
    }
  });
}
