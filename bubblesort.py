def bubbleSort(lst):
    n = len(lst)
    for i in range(n-1):
        for j in range(n - i - 1):
            print(lst)
            if lst[j] > lst [j + 1]:
                tmp = lst[j]
                print('switching ' + str(lst[j]) + ' and ' + str(lst[j+1]))
                lst[j] = lst[j+1]
                lst[j+1] = tmp
            else:
                print(str(lst[j]) + ' is not bigger than ' + str(lst[j+1]))
    return lst

print(bubbleSort([10,9,7,3,2,1,20,18]))
