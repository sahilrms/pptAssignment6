function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    let rowStart = 0,
        rowEnd = n - 1,
        colStart = 0,
        colEnd = n - 1;
    let num = 1;
  
    while (num <= n * n) {
      for (let i = colStart; i <= colEnd; i++) {
        matrix[rowStart][i] = num++;
      }
      rowStart++;
  
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = num++;
      }
      colEnd--;
  
      if (rowStart <= rowEnd) {
        for (let i = colEnd; i >= colStart; i--) {
          matrix[rowEnd][i] = num++;
        }
        rowEnd--;
      }
  
      if (colStart <= colEnd) {
        for (let i = rowEnd; i >= rowStart; i--) {
          matrix[i][colStart] = num++;
        }
        colStart++;
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const n = 4;
  const matrix = generateMatrix(n);
  console.log(matrix);
  