def insertionSort(lst):
    n = len(lst)
    for i in range( 1, n ):
        print(lst)
        value = lst[i]
        
        pos = i
        while pos > 0 and value < lst[pos - 1]:
            lst[pos] = lst[pos - 1]
            pos -= 1
        lst[pos] = value
    return lst

print(insertionSort([10,9,7,3,2,1,20,18]))
