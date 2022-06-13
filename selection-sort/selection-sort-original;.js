

function selectionSort(arr) {

  // Copy the original array
  let arrCopy = [...arr];
  // console.log(';;;;;;', arrCopy)
  // Create an array to store the sorted values
  let sorted = []
  // While the array is not empty...
  while(arrCopy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half

    let minIndex = 0;
    // let minVal = arr[0];
    // console.log('this is arrCopy', arrCopy)
    for(let i = 1; i < arrCopy.length; i ++) {
      if (arrCopy[i] < arrCopy[minIndex]) {
        minIndex = i;
      }
    }
    let minVal = arrCopy.splice(minIndex,1)[0];
    // console.log('this is minVal', minVal)
    // Save and remove the value at the min index
    // Add the min value to the end of the sorted array
    sorted.push(minVal);
    // console.log('this is sorted array', sorted)
  }
  return sorted;

}


function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0
  // Repeat while the unsorted half is not empty:
  while(pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    // Save the min value
    let minVal = arr[pointer];
    // Find the index of the minimum value in the unsorted half
    let minIndex = pointer;
    for (let i = pointer + 1; i < arr.length; i ++) {
      if (arr[i] < minVal) {
        minVal = arr[i]
        minIndex = i
      }
    }
    // because we already have a variable holding the value of he minVal, so we can move
    // each element from the left of minVal and right of the already sorted part, which is 
    // separated by the divider 1 step to the right side. 
    for(let j = minIndex; j >= pointer; j --) {
      arr[j] = arr[j-1]
    }
    
    // Put the min value at the divider
    arr[pointer] = minVal;
    // Increment the divider and repeat
    pointer += 1;

  }
  return arr;
}

arr = [2,4,6,8,1,3,5,7,9];
console.log(selectionSortInPlace(arr))

module.exports = [selectionSort, selectionSortInPlace];
