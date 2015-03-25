function sherlockAndSquares(num1, num2) {
	var arr = [];
	for (var i = num1; i <= num2; i++) {
		if ((Math.sqrt(i) % 1) === 0) {
			arr.push(i);
		}
	}
	return arr.length;
}
