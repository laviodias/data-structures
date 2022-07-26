function binarySearch(array, number) {
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

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))