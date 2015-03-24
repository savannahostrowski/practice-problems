function findDigits(n) {
  num_divide = 0;
  number_to_str = String(n);
  for (var i = 0; i < number_to_str.length; i++) {
    if (number_to_str[i] != 0) {
      remainder = n % Number(number_to_str[i])
      if (remainder == 0) {
        num_divide += 1;
      }
    }
  }
  return num_divide;
}