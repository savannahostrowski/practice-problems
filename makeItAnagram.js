function makeItAnagram(s1, s2){
	deletions = 0;
	commons = [];
	if (s1.length > s2.length){
		strI = s1;
		strJ = s2;
	} else {
		strI = s2;
		strJ = s1;
	}
	for (var i = 0; i < s1.length; i++){
		for (var j = 0; j < s2.length; j++){
			console.log(s2[j]);
      if (s1[i] == s2[j]){
        commons.push(s1[i]);
			}
		}
	}
	diff1 = s1.length - commons.length;
	diff2 = s2.length - commons.length;
	return diff1 + diff2;
}
	

