function maximizedXor (num1, num2){
	arr = [];
	for (var i = num1; i <= num2; i++){
		for (var j= num1; j <= num2; j++){
			arr.push(i ^ j);
		}
	}
	return Math.max.apply( Math, arr );;
}
		
