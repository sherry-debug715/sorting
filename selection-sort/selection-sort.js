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

function selectionSortInPlace(arr) {
    let pointer = 0;
    while(pointer < arr.length) {
        let minVal = arr[pointer];
        let minIndex = pointer;
        for(let i = pointer + 1; i < arr.length; i ++) {
            if(arr[i] < minVal) {
                minVal = arr[i];
                minIndex = i
            }
        }
        [arr[pointer], arr[minIndex]] = [arr[minIndex], arr[pointer]];

        pointer += 1
    }
    return arr;
}

// arr = [2,4,6,8,1,3,5,7,9];

// console.log(selectionSortInPlace(arr))
module.exports = [selectionSort, selectionSortInPlace];