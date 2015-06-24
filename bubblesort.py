def bubbleSort(lst):
    n = len(lst)
    for i in range(n-1):
        print(lst[i])
        for j in range(n - i - 1):
            if lst[j] > lst [j + 1]:
                tmp = lst[j]
                print(lst)
                print('this is temp ' + str(tmp))
                lst[j] = lst[j+1]
                print(lst[j+1])
                lst[j+1] = tmp
                print(lst[j+1])
    return lst

print(bubbleSort([10,9,7,3,2,1,20,18]))
