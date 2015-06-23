def selectionSort(lst):
    n = len(lst)
    for i in range( n - 1):
        smallNdx = i
        for j in range(i + 1, n):
            if lst[j] < lst[smallNdx]:
                smallNdx = j
        print(lst)
        if smallNdx != i:
            tmp = lst[i]
            print('switching ' + str(lst[i]) + ' and ' + str(lst[smallNdx]))
            lst[i] = lst[smallNdx]
            lst[smallNdx] = tmp
        else:
            print(str(lst[i]) + ' is in the correct place')

    return lst

print(selectionSort([10,9,7,3,2,1,20,18]))
