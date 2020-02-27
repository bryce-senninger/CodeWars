//Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
  arr.sort((a, b) => a - b);
  let minSum = 0;
  let tempIndex = arr.length - 1;
  for (i = 0; i < arr.length / 2; i++) {
    minSum += arr[i] * arr[tempIndex];
    tempIndex--;
  }
  return minSum;
}
