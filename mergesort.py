def pythonMergeSort( theList ):
    if len(theList) <= 1 :
        return theList
    else :
        mid = len(theList) // 2
        leftHalf = pythonMergeSort(theList[:mid])
        rightHalf = pythonMergeSort( theList[mid:])
        newList = mergeOrderedLists(leftHalf, rightHalf)
        return newList

def mergeOrderedLists(leftHalf, rightHalf):
    newlst = []
    i = 0
    j = 0
    print(leftHalf, rightHalf)
    
    while leftHalf[i] < rightHalf[j]:
        newlst.append(leftHalf[i])
        print(leftHalf[i])
        print(rightHalf[j])
        i += 1
        while i > len(leftHalf) - 1:
            newlst.extend(rightHalf[j:])
    while rightHalf[j] < leftHalf[i]:
        newlst.append(rightHalf[j])
        print(leftHalf[i])
        print(rightHalf[j])
        j += 1
        while j > len(rightHalf) - 1:
        newlst.extend(leftHalf[i:])
    return newlst
        
print(pythonMergeSort([15,6,7,8,2,5,3]))
            
