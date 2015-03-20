function uTree (cycles){
	var tree = 1;
	var cyclesToCalc = Array.apply(null, {length: cycles}).map(Number.call, Number);
	for (var i = 0; i < cyclesToCalc.length; i++){
		if (cyclesToCalc[i] % 2 == 0 || cyclesToCalc[i] == 0){
			tree += tree;
		} else {
			tree += 1;
		}
	}
return tree;
}