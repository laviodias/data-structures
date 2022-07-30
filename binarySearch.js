function binarySearch(array, number) {
  if(!array || !Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }
  let start = 0
  let end = array.length - 1
  while (start <= end) {
    let middle = Math.ceil((start + end) / 2)
    if (array[middle] == number)
      return middle
    else if (array[middle] < number)
      start = middle + 1
    else
      end = middle - 1
  }
  return -1
}

module.exports = binarySearch