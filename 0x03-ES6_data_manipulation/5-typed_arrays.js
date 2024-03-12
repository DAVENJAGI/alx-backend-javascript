/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored in the position.
 * @author DAVENJAGI <https://github.com/DAVENJAGI>
 * @returns {DataView}
 */
export default function createInt8TypedArray() {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new TypeError('Invalid input types: all arguments must be numbers');
  }

  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range: position must be between 0 and length-1');
  }

  const buffer = new ArrayBuffer(length);

  const int8View = new Int8Array(buffer);

  int8View[position] = value;

  return buffer;
}