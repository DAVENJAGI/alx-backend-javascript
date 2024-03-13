/**
 * Checks a set for an array element.
 * @param {Set} set - Collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
