function diagonalDifference(arr: number[][]): number {
  // Write your code here
//   console.log(arr[0].length);
  const size = arr[0].length
  let primaryDiagonal: Array<number> = []
  let secondaryDiagonal: Array<number> = []

  for (var i = 0; i < size; i++) {
    primaryDiagonal.push(arr[i][i])
    secondaryDiagonal.push(arr[i][size - 1 - i])
  }

  let sumPrimaryDiagonal: number = 0
  let sumSecondaryDiagonal: number = 0

  for (const item of primaryDiagonal) {
    sumPrimaryDiagonal = sumPrimaryDiagonal + item
  }

  for ( const item of secondaryDiagonal) {
    sumSecondaryDiagonal = sumSecondaryDiagonal + item
  }

  return Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
