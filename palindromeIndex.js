function arraysEqual(arr1, arr2) {
    var count = 0;
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] === arr2[j]) {
            count += 1;
        }
    }
    if (count === arr1.length) {
        return true;
    }
    return false;
}

function palindromeIndex(word) {
    var charlist = word.split('');
    if (charlist === charlist.reverse()){
      return -1;
    }
    for (var i = 0; i < charlist.length; i++) {
        var arr = charlist.slice(0);
        arr.splice(i, 1);
        var reverse = arr.slice(0).reverse();
        if (arraysEqual(arr, reverse)) {
            return i;
        }
    }
    return -1;
}


console.log(palindromeIndex('aaa'));
