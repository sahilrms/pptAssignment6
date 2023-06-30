function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    if (n < 3) {
      return false;
    }
  
    while (i + 1 < n && arr[i] < arr[i + 1]) {
      i++;
    }
  
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    while (i + 1 < n && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  
  // Example usage:
  const arr = [1, 3, 2];
  const result = validMountainArray(arr);
  console.log(result);
  