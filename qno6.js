function findOriginalArray(changed) {
    const originalSet = new Set();
    changed.sort((a, b) => a - b);
  
    for (const num of changed) {
      if (!originalSet.has(num / 2)) {
        originalSet.add(num);
      } else {
        originalSet.delete(num / 2);
      }
    }
  
    if (originalSet.size === 0) {
      return [];
    } else {
      return Array.from(originalSet);
    }
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);
  