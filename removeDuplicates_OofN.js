function removeDups(arr) {
	var storageDict = {};
	var counter = 0;
	for (var i = 0; i < arr.length; i++) {
		if (!(arr[i] in storageDict)) {
			storageDict[arr[i]] = 1;
			arr[counter] = arr[i];
			counter += 1;
		}
	}
	for (var j = counter; j < arr.length; j++) {
		arr[j] = null;
	}
	return arr;
}

