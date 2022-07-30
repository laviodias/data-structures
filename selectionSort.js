function findMin(array) {
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if (current < array[minIndex]) {
      minIndex = i
    }
  }
  return minIndex
}

function selectionSort(array) {
  if(!array || !Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }
  let newArray = []
  const arraySize = array.length
  while (newArray.length < arraySize) {
    const minIndex = findMin(array)
    const minValue = array[minIndex]
    array.splice(minIndex, 1)
    newArray.push(minValue)
  }
  return newArray
}

module.exports = selectionSort