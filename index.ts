function calculateMaxArea(height: number[]): number {
  if (!height?.length) {
    return 0;
  }
  let first: number = 0;
  let last: number = height.length - 1;
  let maxArea: number = 0;
  while (first < last) {
    const tempMaxArea: number =
      Math.min(height[first], height[last]) * (last - first);
    if (tempMaxArea > maxArea) {
      maxArea = tempMaxArea;
    }
    if (height[first] < height[last]) {
      first++;
    } else {
      last--;
    }
  }
  return maxArea;
}

//Example Test 1 Input: height = [1,8,6,2,5,4,8,3,7] Output: 49
const maxArea1 = calculateMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(
  "Example Test 1",
  "\ninput : height = [1,8,6,2,5,4,8,3,7]",
  "\noutput:",
  maxArea1
);

//Example Test 2 Input: height = [1,1] Output: 1
const maxArea2 = calculateMaxArea([1, 1]);
console.log(
  "Example Test 2",
  "\ninput : height = [1,1]",
  "\noutput:",
  maxArea2
);
