// ============================
// SORTING ALGORITHMS
// ============================

// Bubble Sort Algorithm
// let arr = [10, 5, 12, 1, 3];
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("Bubble Sort:", bubbleSort([10, 5, 12, 1, 3]));

// Selection Sort Algorithm
// let arr2 = [2, 4, 3, 5, 6, 1];
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // Swap the found minimum element with the first element
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log("Selection Sort:", selectionSort([2, 4, 3, 5, 6, 1]));

// Insertion Sort Algorithm
// let arr3 = [1, 4, 3, 5, 6, 2];
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log("Insertion Sort:", insertionSort([1, 4, 3, 5, 6, 2]));
