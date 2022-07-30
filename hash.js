const TABLE_SIZE = 91;
const RANDOM_CONSTANT = 0.6180339887;
let hashTable = new Array(TABLE_SIZE);

function hash(value) {
  let numToHash = value;
  if (isNaN(value)) {
    numToHash = value.split('').map(char => char.charCodeAt(0)).reduce((a, b) => a + b);
  }
  const index = Math.floor(TABLE_SIZE * (numToHash * RANDOM_CONSTANT % 1))

  return index
}

function set(key, value) {
  const index = hash(key);
  if (!hashTable[index]) {
    hashTable[index] = [];
  }
  hashTable[index].push(value);
}

function get(value) {
  return hashTable[hash(value)];
}

set('test', 10);
console.log(get('test'))