var word1 = "lionoil";

function palindrome(word) {
    charlist = word.split('');
    reverse_list = charlist.reverse();
    if (charlist == reverse_list) {
        return true;
    } else {
        return false;
    }
}

function palindromeAlt(word) {
    charlist = word.split(''); // returns list of char
    console.log(charlist);
    if (charlist[0] != charlist[charlist.length - 1]) {
        return false;
    } else if (charlist.length == 1) {
        return true;
    } else {
        charlist.shift();
        charlist.pop();
        return palindromeAlt(charlist.join(''));
    }
}

function palindromeAlt2(word){
    length = word.length;
    for (var i = 0; i < length; i++){
        if (word[i] !== word[length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindromeAlt2(word1));