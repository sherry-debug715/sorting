// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the sorted array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  let copyArr = [...arr];
  let sorted = [];
  while(copyArr.length > 0) { // 5 // 4
    console.log(copyArr.join(','));
    let lastVal = copyArr.pop(); // 1 // 4 
    console.log('this is last val', lastVal);
    sorted.push(null)
    let i = sorted.length - 1; // i = 0
    while(i > 0) {
      if(sorted[i-1] < lastVal) {
        break
      } else {
        sorted[i] = sorted[i-1]
        i -= 1;
      };
    }
    sorted[i] = lastVal; // [1]
  }
  return sorted

}


// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the pointer is not at the end of the array:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  let pointer = 1;
  while(pointer < arr.length) {
    console.log(arr.join(','));
    let index = pointer; // 2
    let val = arr[index]; // val = 0
    while(index > 0) {
      if (arr[index - 1] < val) { 
        break
      } else {
        arr[index] = arr[index - 1]; // [3, 3, 0, 4, 1]
        index -= 1; // index = 0
      }
    }

    arr[index] = val; // [2, 3, 0, 4, 1]

    pointer += 1;

  }

  return arr;
}


// function insertionSortInPlace(arr) {
//   // let pointer = 1;
//   for (let pointer = 1; pointer < arr.length; pointer ++) {
//     let key = arr[pointer];
//     let left_side = pointer - 1;
//     while(left_side >= 0 && arr[left_side]>key) {
//       arr[left_side+1] = arr[left_side];
//       left_side -= 1;
//       arr[left_side+1] = key;
//       console.log(arr.join(','));
//     }
//   }
//   return arr;
// }

const array = [3, 2, 0, 4, 1];
console.log(insertionSortInPlace(array))

module.exports = [insertionSort, insertionSortInPlace];