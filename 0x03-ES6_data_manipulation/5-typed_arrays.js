function createInt8TypedArray() {
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