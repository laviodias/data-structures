function quickSort(array) {
  if (array.length < 2) {
    return array
  }
  const pivot = array[0]
  const left = array.filter(num => num < pivot)
  const right = array.filter(num => num > pivot)

  return quickSort(left).concat(pivot).concat(quickSort(right))
}

console.log(quickSort([3, 1, 9, 12, 4, 5, 0, 41, 11]))