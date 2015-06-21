def MergeSort(lst):
  mid = len(lst) // 2
  L1 = lst[:mid]
  L2 = lst[mid:]

def mergeSort(lst, left, right, end, tmp):
  a = left
  b = right
  m = 0

  while a < right and b < end:
