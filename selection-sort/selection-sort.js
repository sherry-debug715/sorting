// out of place
function selectionSort(arr) {
    let arrCopy = arr.slice();
    let sorted = [];
    let minIndex = 0;
    while(arrCopy.length) {
        for(let i = 0; i < arrCopy.length; i ++) {
            if (arrCopy[i] < arrCopy[minIndex]) {
                minIndex = i;
            } 
        }
        let minVal = arrCopy.splice(minIndex, 1)[0];
        sorted.push(minVal);

    }
    return sorted
}


// arr = [2,4,6,8,1,3,5,7,9];
// console.log(selectionSort(arr))

// function selectionSortInPlace(arr) {
//     let pointer = 0;
//     while(pointer < arr.length) {
//         let minVal = arr[pointer];
//         let minIndex = pointer;
//         for(let i = pointer + 1; i < arr.length; i ++) {
//             if(arr[i] < minVal) {
//                 minVal = arr[i];
//                 minIndex = i
//             }
//         }
//         [arr[pointer], arr[minIndex]] = [arr[minIndex], arr[pointer]];

//         pointer += 1
//     }
//     return arr;
// }


function selectionSortInPlace(arr) {
    let pointer = 0
    while(pointer < arr.length) {
        console.log(arr.join(','))
        let minIndex = pointer;
        for (let i = pointer + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i
            }
        }
        swap(pointer, minIndex, arr);
        pointer += 1;
    }
    return arr
}

function swap(index1, index2, arr) {
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
arr = [2,4,6,8,1,3,5,7,9];

console.log(selectionSortInPlace(arr))
module.exports = [selectionSort, selectionSortInPlace];