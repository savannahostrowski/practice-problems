def numberOfWords(str):
  number = 0
  for i in str:
    if i == " ":
      number += 1
  return number + 1
