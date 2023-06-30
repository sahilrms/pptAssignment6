function findMaxLength(nums) {
    const countMap = { 0: -1 };
    let maxLen = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] === 0 ? -1 : 1;
  
      if (count === 0) {
        maxLen = i + 1;
      } else if (count in countMap) {
        maxLen = Math.max(maxLen, i - countMap[count]);
      } else {
        countMap[count] = i;
      }
    }
  
    return maxLen;
  }
  
  // Example usage:
  const nums = [0, 1];
  const result = findMaxLength(nums);
  console.log(result);
  