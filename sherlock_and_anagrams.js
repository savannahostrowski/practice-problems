function sherlockAndAnagrams (s) {
	lstOfSubstr1 = [];
	lstOfSubstr2 = [];
	for (var i = 0; i <= s.length; i++) {
		for (var j = 0; j <=s.length; j++){
			substr = s.substring(0, j);
			if (substr.length >= 2) {
			lstOfSubstr1.push(substr);
		}
	}
		
	}
	for (var i = s.length; i >= 0; i--){
		substr = s.substring(i, s.length);
		if (substr.length >= 2) {
			lstOfSubstr2.push(substr);
		}
	}
	console.log(lstOfSubstr1, lstOfSubstr2);
}

console.log(sherlockAndAnagrams('abba'));



