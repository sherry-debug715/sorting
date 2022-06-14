def selectionSort(array):
    # Write your code here.
 
    pointer = 0
    while pointer < len(array):
        min_index = pointer
        for i in range(pointer+1, len(array)):
            if array[i] < array[min_index]:
                min_index = i
        print(min_index, pointer)
        swap(pointer, min_index, array)
        pointer += 1
    return array

def swap(index1, index2, array):
    array[index1], array[index2] = array[index2], array[index1]

sort = [1,2]
print(selectionSort(sort))