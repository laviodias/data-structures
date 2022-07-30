const binarySearch = require('./binarySearch')

const BINARY_SEARCH_ERROR = "First argument must be an array"

describe("test binarySearch", () => {
  it("should return -1 when the number is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  })
  it("should return the index of the number in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(6);
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