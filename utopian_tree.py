def utopianTree (cycles):
  tree = 1
  for elem in range(0, cycles):
    if elem % 2 == 0 or elem == 0:
      tree += tree
    else:
      tree += 1
  return tree


