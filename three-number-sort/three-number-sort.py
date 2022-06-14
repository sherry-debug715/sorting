def threeNumberSort(array, order):
    # Write your code here.
    order0 = order[0]
    order1 = order[-1]

    arr_pointer = 0
    arr_back_pointer = -1
    for i in range(len(array)):
        if array[i] == order0:
            swap(i, arr_pointer, array)
            arr_pointer +=  1
            print('this is i', i)
            print('this is array', array)
        if array[i] == order1:
            print('this is i in the second logic', i)
            swap(i, arr_back_pointer, array)
            print('this is back_pointer in the second logic', arr_back_pointer)
            print('this is array', array)
            print()
            arr_back_pointer -= 1
            # print('back back',arr_back_pointer)

    return array



def swap(index1, index2, array):
    array[index1], array[index2] = array[index2], array[index1]


unsorted = [1,0,0,-1,-1,0,1,1]
order = [0,1,-1]
print(threeNumberSort(unsorted,order))