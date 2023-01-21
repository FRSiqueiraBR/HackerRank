function lonelyinteger(a: number[]): number {
  // Write your code here
  for (var item of a) {
    const total = a.filter((n) => n == item).length;

    if (total == 1)
      return item
  }

  return 0
}

lonelyinteger([1,2,3,4,3,2,1])