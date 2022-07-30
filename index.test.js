const binarySearch = require('./binarySearch')
const quickSort = require('./quicksort')
const selectionSort = require('./selectionSort')

describe("test binarySearch", () => {
  const BINARY_SEARCH_ERROR = "First argument must be an array"
  it("should return -1 when the number is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  })
  it("should return the index of the number in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  })
  it("should return -1 when the array is empty", () => {
    expect(binarySearch([], 1)).toBe(-1);
  })
  it("should throw error when the array is null", () => {
    try {
      binarySearch(null, 1);
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(BINARY_SEARCH_ERROR);
    }
  })
  it("should throw error when the first parameter is not an array", () => {
    try {
      binarySearch({}, 1);
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(BINARY_SEARCH_ERROR);
    }
  })
})

describe("test quickSort", () => {
  const QUICKSORT_ERROR = "Argument must be an array"
  it("should sort the array", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })
  it("should throw error when the array is null", () => {
    try {
      quickSort(null);
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(QUICKSORT_ERROR);
    }
  })
  it("should throw error when the first argument is not an array", () => {
    try {
      quickSort({});
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(QUICKSORT_ERROR);
    }
  })
})

describe("test selectionSort", () => {
  const SELECTION_SORT_ERROR = "Argument must be an array"
  it("should sort the array", () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })
  it("should throw error when the array is null", () => {
    try {
      selectionSort(null);
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(SELECTION_SORT_ERROR);
    }
  })
  it("should throw error when the first argument is not an array", () => {
    try {
      selectionSort({});
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(SELECTION_SORT_ERROR);
    }
  })
})