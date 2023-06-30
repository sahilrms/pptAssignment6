function reconstructPermutation(s) {
    const perm = [];
    let start = 0;
    let end = s.length;
  
    for (const c of s) {
      if (c === 'I') {
        perm.push(start);
        start++;
      } else if (c === 'D') {
        perm.push(end);
        end--;
      }
    }
  
    perm.push(start);
  
    return perm;
  }
  
  // Example usage:
  const s = "IDID";
  const result = reconstructPermutation(s);
  console.log(result);
  