function processData(input) {
  sorted_array = input.sort();
  for (var i = 0; i < sorted_array.length; i++){
    if (sorted_array[i] == sorted_array[i + 1]){
      sorted_array.splice(i, 1);
    }
  }
  return sorted_array;
}
