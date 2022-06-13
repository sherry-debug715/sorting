
// function bubbleSort(arr) {

//     // Iterate through the array
//     let isSorted = true;
//       // If the current value is greater than its neighbor to the right
//         // Swap those values
//     while (isSorted) {
//       isSorted = false;
//       for(let i = 0; i < arr.length - 1; i ++) {
//         if (arr[i] > arr[i+1]) {
//           swap(i, i+1, arr)
//           isSorted = true
//           // Do not move this console.log
//           console.log(arr.join(","));
//         }
//       }
//     }

//     // If you get to the end of the array and no swaps have occurred, return
//     return arr
//     // Otherwise, repeat from the beginning

// }

// function swap(i, j, arr) {
//   return [arr[i], arr[j]] = [arr[j], arr[i]];
// }


// function bubbleSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length - 1; i ++) {
//       if (arr[i] > arr[i+1]) {
//         swapEle(i, i+1, arr);
//         console.log(arr.join(","));
//         isSorted = false;
//       }
//     }
//   }
//   return arr;
// }

// increase some time complexity
function bubbleSort(arr) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for(let i = 0; i < arr.length-1-counter; i ++) {
      if(arr[i]>arr[i+1]) {
        swapEle(i, i+1, arr);
        console.log(arr.join(","));
        isSorted = false;
      }
    }
    counter += 1;
  }
  return arr;
}

function swapEle(index1, index2, arr) {
  return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
// array = bubbleSort([2,4,6,8,1,3,5,7,9])
// console.log(array)
module.exports = bubbleSort;