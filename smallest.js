let arr = [34, 7, 23, 32, 5, 62];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log("The smallest number is:", smallest);
