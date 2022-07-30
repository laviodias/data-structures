function quickSort(array) {
  if(!array || !Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }
  if (array.length < 2) {
    return array
  }
  const randomNumber = Math.ceil(Math.random()*array.length-1)
  const pivot = array[randomNumber]
  const left = array.filter(num => num < pivot)
  const right = array.filter(num => num > pivot)

  return quickSort(left).concat(pivot).concat(quickSort(right))
}

module.exports = quickSort