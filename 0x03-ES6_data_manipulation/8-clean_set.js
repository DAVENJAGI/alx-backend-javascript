/**
 * Strip and join strings with dash
 * @param {Set<String>} set - Collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns
 */
export default function cleanSet(mySet, startString) {
  const parts = [];
  if (!mySet || !startString || !(mySet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of mySet.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
